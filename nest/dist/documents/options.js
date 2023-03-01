"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPTIONS = void 0;
exports.OPTIONS = {
    types: {
        order: {
            name: 'Заказ покупателя',
            statuses: {
                framed: {
                    name: 'Оформлен',
                    sort: 1,
                    color: ''
                },
                work: {
                    name: 'В работе',
                    sort: 2,
                    color: ''
                },
                completed: {
                    name: 'Завершен',
                    sort: 3,
                    color: ''
                }
            },
            properties: {
                preview: {
                    type: "image",
                    name: "Изображение заказа",
                    active: true,
                    visible: true,
                    sort: 1,
                    group: '',
                    permissions: [],
                    required: false,
                    sortered: false,
                    filtered: false
                },
                shippingDate: {
                    type: "date",
                    name: "Дата отгрузки",
                    active: true,
                    visible: true,
                    sort: 1,
                    group: '',
                    permissions: [],
                    required: true,
                    sortered: true,
                    filtered: true
                },
                payDate: {
                    type: "date",
                    name: "Дата отгрузки",
                    active: true,
                    visible: true,
                    sort: 1,
                    group: '',
                    permissions: [],
                    required: true,
                    sortered: true,
                    filtered: true
                }
            }
        },
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
};
//# sourceMappingURL=options.js.map