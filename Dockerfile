sh '''
    # Build the Docker image from the specified directory
    docker build -t ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${ECR_REPOSITORY_NAME}:${IMAGE_TAG} -f path/to/your/docker/Dockerfile path/to/your/docker
'''
