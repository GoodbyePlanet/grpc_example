# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: user.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\nuser.proto\x12\x07user.v1\"H\n\x04User\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x12\n\nfirst_name\x18\x02 \x01(\t\x12\x11\n\tlast_name\x18\x03 \x01(\t\x12\r\n\x05\x65mail\x18\x04 \x01(\t\"\x1f\n\x0eGetUserRequest\x12\r\n\x05\x65mail\x18\x01 \x01(\t\".\n\x0fGetUserResponse\x12\x1b\n\x04user\x18\x01 \x01(\x0b\x32\r.user.v1.User\"\x14\n\x12GetAllUsersRequest\"3\n\x13GetAllUsersResponse\x12\x1c\n\x05users\x18\x01 \x03(\x0b\x32\r.user.v1.User2\x9c\x01\n\x0bUserService\x12\x43\n\x0eGetUserByEmail\x12\x17.user.v1.GetUserRequest\x1a\x18.user.v1.GetUserResponse\x12H\n\x0bGetAllUsers\x12\x1b.user.v1.GetAllUsersRequest\x1a\x1c.user.v1.GetAllUsersResponseb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'user_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _USER._serialized_start=23
  _USER._serialized_end=95
  _GETUSERREQUEST._serialized_start=97
  _GETUSERREQUEST._serialized_end=128
  _GETUSERRESPONSE._serialized_start=130
  _GETUSERRESPONSE._serialized_end=176
  _GETALLUSERSREQUEST._serialized_start=178
  _GETALLUSERSREQUEST._serialized_end=198
  _GETALLUSERSRESPONSE._serialized_start=200
  _GETALLUSERSRESPONSE._serialized_end=251
  _USERSERVICE._serialized_start=254
  _USERSERVICE._serialized_end=410
# @@protoc_insertion_point(module_scope)
