import EntityTypePermissions from "src/entities/permissions/entityType.permissions.enum";
import EntitySectionPermissions from "src/entities/permissions/entitySection.permissions.enum";
import EntityItemPermissions from "src/entities/permissions/entityItem.permission.enum";
import PropertyGroupPermissions from "src/entities/permissions/PropertyGroup.permissions";
import PropertyPermissions from "src/entities/permissions/Property.permissions";
import PropertyValuePermissions from "src/entities/permissions/PropertyValue.permissions";
import DocumentPermissions from "src/documents/permissions/document.permissions.enum";
import OrderPermissions from "../documents/permissions/order.permissions.enum";
import InvoicePermissions from "src/documents/permissions/invoice.permissions.enum";
import FilePermissions from "src/files/permissions/file.permissions";
import OrganizationPermissions from "src/organizations/permissions.enum";

const Permission = {
    ...EntityTypePermissions,
    ...EntitySectionPermissions,
    ...EntityItemPermissions,
    ...PropertyGroupPermissions,
    ...PropertyPermissions,
    ...PropertyValuePermissions,
    ...DocumentPermissions,
    ...OrderPermissions,
    ...InvoicePermissions,
    ...FilePermissions,
    ...OrganizationPermissions
}

type Permission = EntityTypePermissions | 
                  EntitySectionPermissions | 
                  EntityItemPermissions | 
                  PropertyGroupPermissions |
                  PropertyPermissions |
                  PropertyValuePermissions |
                  DocumentPermissions | 
                  OrderPermissions | 
                  InvoicePermissions | 
                  FilePermissions | 
                  OrganizationPermissions

export default Permission