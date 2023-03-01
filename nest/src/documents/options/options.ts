import { orderOptions } from "./order.options"
export const OPTIONS = {
    types: {
        ...orderOptions,
        shipment: {
            name: 'Отгрузка покупателю'
        },
        salesreturn: {
            name: 'Возврат от покупателя'
        },
        invoice: {
            name: 'Счет покупателя',
            statuses: {
                draft: {
                    name: 'Черновик',
                    sort: 1,
                    color: ''
                },
                sended: {
                    name: 'Отправлен',
                    sort: 2,
                    color: ''
                },
            },
            properties: []
        },
        purchaseorder: {
            name: 'Заказ поставщику'
        },
        purchasereturn: {
            name: 'Возврат поставщику'
        },
        supply: {
            name: 'Прием товара от поставщика'
        },
        cashin: {
            name: 'Приходный кассовый ордер'
        },
        cashout: {
            name: 'Расходный кассовый ордер'
        }
    }
}