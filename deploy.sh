#! /bin/bash

: '..... CONSTANTS ....'
COMPOSE_FILE="docker-compose.prod.yaml"
CONTAINER_PREFIX="mern"

is_container_running() {
    local container_name="$1"
    docker ps --format '{{.Names}}' | grep -q "^${container_name}$"
}

function remove_existing_containers() {
    echo "removing existing containers ..."

    if is_container_running "${CONTAINER_PREFIX}server"; then
        docker stop "${CONTAINER_PREFIX}server"
    fi

    # get all the containers that matches the container prefix and stop them
    docker ps -a --format '{{.Names}}' | grep "^${CONTAINER_PREFIX}" | xargs -r docker stop

    # remove all the stopped containers
    docker ps -a --format '{{.Names}}' | grep "^${CONTAINER_PREFIX}" | xargs -r docker rm
    docker container prune -f
}


function deploy() {
    remove_existing_containers

    echo "Finally!. Your application is ready for deployment .."

    docker compose -f $COMPOSE_FILE up -d --build
}

function main() {

    if ! command docker >/dev/null 2>&1 || ! command -v docker compose &>/dev/null; then
        echo -e "Ensure docker and docker compose is installed on your system \nExiting ...."
        exit 1

    else
        echo "Confirmed! docker is installed on your system ..."
        if [ ! -f "$COMPOSE_FILE" ]; then
            echo -e "Docker Compose file '$DOCKER_COMPOSE_FILE' not found.\n Exiting..."
            exit 1

        else
            # finally deploy the application
            echo "Deploying your application in a few ..."
            deploy

        fi

    fi

}

main
