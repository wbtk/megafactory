export declare const OPTIONS: {
    types: {
        order: {
            name: string;
            statuses: {
                framed: {
                    name: string;
                    sort: number;
                    color: string;
                };
                work: {
                    name: string;
                    sort: number;
                    color: string;
                };
                completed: {
                    name: string;
                    sort: number;
                    color: string;
                };
            };
            properties: {
                preview: {
                    type: string;
                    name: string;
                    active: boolean;
                    visible: boolean;
                    sort: number;
                    group: string;
                    permissions: any[];
                    required: boolean;
                    sortered: boolean;
                    filtered: boolean;
                };
                shippingDate: {
                    type: string;
                    name: string;
                    active: boolean;
                    visible: boolean;
                    sort: number;
                    group: string;
                    permissions: any[];
                    required: boolean;
                    sortered: boolean;
                    filtered: boolean;
                };
                payDate: {
                    type: string;
                    name: string;
                    active: boolean;
                    visible: boolean;
                    sort: number;
                    group: string;
                    permissions: any[];
                    required: boolean;
                    sortered: boolean;
                    filtered: boolean;
                };
            };
        };
        shipment: {
            name: string;
        };
        salesreturn: {
            name: string;
        };
        invoice: {
            name: string;
            statuses: {
                draft: {
                    name: string;
                    sort: number;
                    color: string;
                };
                sended: {
                    name: string;
                    sort: number;
                    color: string;
                };
            };
            properties: any[];
        };
        purchaseorder: {
            name: string;
        };
        purchasereturn: {
            name: string;
        };
        supply: {
            name: string;
        };
        cashin: {
            name: string;
        };
        cashout: {
            name: string;
        };
    };
};
