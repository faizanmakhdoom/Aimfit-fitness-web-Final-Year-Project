const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { Resource } = require('@opentelemetry/resources');

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'http://192.168.0.53:4318/v1/traces',
  }),

  resource: new Resource({
    'service.name': 'aimfit-backend',   // 👈 SAFE STANDARD WAY
  }),

  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

console.log('Tracing initialized');
