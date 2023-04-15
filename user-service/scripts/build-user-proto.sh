#!/bin/bash

python3 -m grpc_tools.protoc -I../proto/ --python_out=./src --pyi_out=./src --grpc_python_out=./src ../proto/user/v1/user.proto
