#!/bin/bash

touch ./.env

GITHUB_API_TOKEN=$(aws ssm get-parameter \
--name "/github-timeline/GITHUB_APP_TOKEN" \
--query "Parameter.Value" \
)

chmod +w ./.env
echo VUE_APP_GITHUB_API_TOKEN=${GITHUB_API_TOKEN} >> ./.env
