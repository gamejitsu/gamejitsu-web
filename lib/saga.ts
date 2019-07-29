import { all, AllEffect, ForkEffect } from 'redux-saga/effects'

export default function*(): IterableIterator<AllEffect<IterableIterator<ForkEffect>>> {
  yield all([])
}
