#!/bin/bash

python3 -m grpc_tools.protoc -I../proto/user/v1 --python_out=./src --pyi_out=./src --grpc_python_out=./src ../proto/user/v1/user.proto
