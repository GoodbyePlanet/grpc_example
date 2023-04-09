from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Order(_message.Message):
    __slots__ = ["order_date", "order_id", "total_amount", "user_id"]
    ORDER_DATE_FIELD_NUMBER: _ClassVar[int]
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    TOTAL_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    order_date: _timestamp_pb2.Timestamp
    order_id: int
    total_amount: int
    user_id: int
    def __init__(self, order_id: _Optional[int] = ..., user_id: _Optional[int] = ..., order_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., total_amount: _Optional[int] = ...) -> None: ...

class OrdersByUserIdRequest(_message.Message):
    __slots__ = ["user_id"]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    user_id: int
    def __init__(self, user_id: _Optional[int] = ...) -> None: ...

class OrdersByUserIdResponse(_message.Message):
    __slots__ = ["orders"]
    ORDERS_FIELD_NUMBER: _ClassVar[int]
    orders: _containers.RepeatedCompositeFieldContainer[Order]
    def __init__(self, orders: _Optional[_Iterable[_Union[Order, _Mapping]]] = ...) -> None: ...
