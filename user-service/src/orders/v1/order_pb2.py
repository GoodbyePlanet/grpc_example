# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: orders/v1/order.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15orders/v1/order.proto\x12\torders.v1\x1a\x1fgoogle/protobuf/timestamp.proto\" \n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x83\x01\n\x05Order\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0f\n\x07user_id\x18\x02 \x01(\x05\x12\x1d\n\x04item\x18\x03 \x01(\x0b\x32\x0f.orders.v1.Item\x12.\n\norder_date\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x0e\n\x06\x61mount\x18\x05 \x01(\x05\"(\n\x15OrdersByUserIdRequest\x12\x0f\n\x07user_id\x18\x01 \x01(\x05\":\n\x16OrdersByUserIdResponse\x12 \n\x06orders\x18\x01 \x03(\x0b\x32\x10.orders.v1.Order2h\n\x0cOrderService\x12X\n\x11GetOrdersByUserId\x12 .orders.v1.OrdersByUserIdRequest\x1a!.orders.v1.OrdersByUserIdResponseB\x02P\x01\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'orders.v1.order_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'P\001'
  _ITEM._serialized_start=69
  _ITEM._serialized_end=101
  _ORDER._serialized_start=104
  _ORDER._serialized_end=235
  _ORDERSBYUSERIDREQUEST._serialized_start=237
  _ORDERSBYUSERIDREQUEST._serialized_end=277
  _ORDERSBYUSERIDRESPONSE._serialized_start=279
  _ORDERSBYUSERIDRESPONSE._serialized_end=337
  _ORDERSERVICE._serialized_start=339
  _ORDERSERVICE._serialized_end=443
# @@protoc_insertion_point(module_scope)
