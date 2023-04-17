from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Item(_message.Message):
    __slots__ = ["id", "name"]
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    id: int
    name: str
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ...) -> None: ...

class Order(_message.Message):
    __slots__ = ["amount", "id", "item", "order_date", "user_id"]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    ORDER_DATE_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    amount: int
    id: int
    item: Item
    order_date: _timestamp_pb2.Timestamp
    user_id: int
    def __init__(self, id: _Optional[int] = ..., user_id: _Optional[int] = ..., item: _Optional[_Union[Item, _Mapping]] = ..., order_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., amount: _Optional[int] = ...) -> None: ...

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
