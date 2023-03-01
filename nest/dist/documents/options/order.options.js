"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderOptions = void 0;
exports.orderOptions = {
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
                filtered: false,
                searchable: false
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
                filtered: true,
                searchable: false
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
                filtered: true,
                searchable: false
            },
            brand: {
                type: "text",
                name: "Бренд",
                active: true,
                visible: true,
                sort: 1,
                group: '',
                permissions: [],
                required: true,
                sortered: true,
                filtered: false,
                searchable: false
            }
        }
    }
};
//# sourceMappingURL=order.options.js.map