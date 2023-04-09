#!/bin/bash

python3 -m grpc_tools.protoc -I../proto/orders/v1 --python_out=./src --pyi_out=./src --grpc_python_out=./src ../proto/orders/v1/order.proto
