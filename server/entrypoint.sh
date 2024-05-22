#! /bin/bash 

if [ "$DATABASE" == "mongoDB" ]; then
    echo "Waiting for MongoDB to start ..."

    timeout=60  # Timeout in seconds
    interval=1  # Sleep interval in seconds
    count=0

    while ! nc -z "$MONGODB_HOST" "$MONGODB_PORT"; do
        if [ "$count" -ge $timeout ]; then
            echo "Timeout reached. MongoDB did not start within $timeout seconds."
            exit 1
        fi

        echo "Waiting for a TCP connection to MongoDB ..."
        sleep "$interval"
        count=$(expr "$count" + $interval)
    done

    echo "MongoDB started successfully."
fi

exec "$@"
