# Populating New Task Definition JSON File with new parameters
AWSREGION=us-east-1
ECS_CLUSTER=Aimfit
SERVICE_NAME=aim-td-service
TASK_DEFINITION=aim-td

echo -e "\r\n*** Dashbaord Server ***\r\n"
echo -e "\r\n*** Dashbaord Server: Populating New Task Definition JSON File with new parameters ***"

 NEW_TASK_DEFINITION=$(cat <<EOF
{
    "family": "aim-td",
    "containerDefinitions": [
        {
            "name": "aim-frontend",
            "image": "656194817844.dkr.ecr.us-east-1.amazonaws.com/aimfit-frontend:latest",
            "memoryReservation": 500,
            "portMappings": [
                {
                    "containerPort": 3000,
                    "hostPort": 3000,
                    "protocol": "tcp"
                }
            ],
            "logConfiguration": {
                "logDriver": "json-file",
                "options": {
                    "max-size": "10m",
                    "max-file": "3"
                }
            }
        },
        {
            "name": "aim-backend",
            "image": "656194817844.dkr.ecr.us-east-1.amazonaws.com/aimfit-backend:latest",
            "memoryReservation": 500,
            "portMappings": [
                {
                    "containerPort": 5000,
                    "hostPort": 5000,
                    "protocol": "tcp"
                }
            ],
            "logConfiguration": {
                "logDriver": "json-file",
                "options": {
                    "max-size": "10m",
                    "max-file": "3"
                }
            }
        }
    ]
}
EOF
)

    echo -e "${NEW_TASK_DEFINITION}\r\n"
    # echo $NEW_TASK_DEFINITION | jq . > NewTaskDefinitionJSON.JSON
    # Registering New Task Definition
    echo -e "\r\n*** Dashbaord server: Registering New Task Definition ***"
    NEW_TASK_INFO=$(aws ecs register-task-definition --region ${AWSREGION} --cli-input-json "$NEW_TASK_DEFINITION")
    echo -e "${NEW_TASK_INFO}\r\n"
    #echo $NEW_TASK_INFO | jq .
    # Getting the Version of the New Task Definition
    echo -e "\r\n*** Dashbaord Server: Getting the Version of the New Task Definition ***"
    NEW_REVISION=$(echo $NEW_TASK_INFO | jq '.taskDefinition.revision')
    #echo $NEW_REVISION
    echo -e "${NEW_REVISION}\r\n"
    # Updating the Service with the New Task Definition
    echo -e "\r\n*** Dashbaord Server: Updating the Service with the New Task Definition ***"
    aws ecs update-service --cluster ${ECS_CLUSTER} --region ${AWSREGION} --service ${SERVICE_NAME} --task-definition ${TASK_DEFINITION}:${NEW_REVISION}
    echo ""
    # Force Deployment of New Task Definition with the running Service
    echo -e "\r\n*** Dashbaord Server: Force Deployment of New Task Definition with the running Service ***"
    aws ecs update-service --cluster ${ECS_CLUSTER} --region ${AWSREGION} --service ${SERVICE_NAME}  --force-new-deployment
    echo ""
    echo ""
    echo ""


    # Populating New Task Definition JSON File with new parameters
    echo -e "\r\n*** BACKGROUND WORKER ***\r\n"
    echo -e "\r\n*** BACKGROUND WORKER: Populating New Task Definition JSON File with new parameters ***"
