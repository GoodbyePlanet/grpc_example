#!/bin/bash

python3 -m grpc_tools.protoc -I../../proto/user/v1 --python_out=../user-proto --pyi_out=../user-proto --grpc_python_out=../user-proto ../../proto/user/v1/user.proto
