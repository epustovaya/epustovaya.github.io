export interface Reservation {
    _id: string;
    propertyId: string;
    siteIds?: (string)[] | null;
    siteType: string;
    arrival: string;
    departure: string;
    camperInfo: CamperInfo;
    paymentInfo: PaymentInfo;
    items?: null;
    holdIds?: null;
    status: string;
    initiator: Initiator;
    createUser: string;
    updatedAt: string;
    createdAt: string;
    notes?: (null)[] | null;
    actions?: (ActionsEntity)[] | null;
    cost: Cost;
    sites?: (SitesEntity)[] | null;
    type: Type;
}
export interface CamperInfo {
    accountId: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    guests?: Guests;
    address?: Address;
    privateNote?: string;
    publicNote?: string;
    rigType?: string;
    rigLength?: number;
}
export interface Guests {
    adults: number;
    children: string;
    pets: string;
}
export interface Address {
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}
export interface PaymentInfo {
    paymentAmount?: null;
    cost: Cost1;
    deposit?: null;
    payment: number;
    payments?: (null)[] | null;
    invoices: Invoices;
    paid: number;
}
export interface Cost1 {
    cost: number;
    invoice: Invoice;
}
export interface Invoice {
    _id: string;
    active: boolean;
    settled: boolean;
    paid: boolean;
    items?: (ItemsEntityOrAddLineItem)[] | null;
    propertyId: string;
    organizationId: string;
    payments?: (null)[] | null;
    taxes?: (null)[] | null;
    dueAt: string;
    feelessTotal: number;
    fee: number;
    feeSettled: boolean;
    subtotal: number;
    total: number;
    remainingBalance: number;
    itemTaxes: number;
    otherTaxes: number;
    appliedTaxes: AppliedTaxesOrRates;
    itemTaxBreakdown?: (ItemTaxBreakdownEntity)[] | null;
    accountId: string;
    updatedAt: string;
    createdAt: string;
    history?: (HistoryEntity)[] | null;
}
export interface ItemsEntityOrAddLineItem {
    amount: number;
    description: string;
    category: string;
    quantity: number;
    options: Options;
    taxes?: (TaxesEntity)[] | null;
    appliedTaxes: AppliedTaxes;
}
export interface Options {
    siteTypeId: string;
    days: boolean;
}
export interface TaxesEntity {
    type: string;
    id: string;
    name: string;
    value: number;
}
export type AppliedTaxes = Record<string, number>;

export interface AppliedTaxesOrRates {
}
export interface ItemTaxBreakdownEntity {
    id: string;
    value: number;
}
export interface HistoryEntity {
    time: string;
    who?: null;
    addLineItem?: ItemsEntityOrAddLineItem1 | null;
    updatedTotal?: UpdatedTotal | null;
    addTaxes?: (null)[] | null;
}
export interface ItemsEntityOrAddLineItem1 {
    amount: number;
    description: string;
    category: string;
    quantity: number;
    options: Options;
    taxes?: (TaxesEntity)[] | null;
    appliedTaxes: AppliedTaxes;
}
export interface UpdatedTotal {
    subtotal: number;
    total: number;
    feelessTotal: number;
    itemTaxes: number;
    otherTaxes: number;
    remainingBalance: number;
    depositSubtotal?: null;
    depositTax?: null;
    depositTotal?: null;
}
export type Invoices = Record<string, Invoice[]>;

export interface Invoice {
    _id: string;
    dueAt: string;
    active: boolean;
    settled: boolean;
    accountId: string;
    paid: boolean;
    items?: (ItemsEntityOrAddLineItem)[] | null;
    payments?: (null)[] | null;
    fee: number;
    feeSettled: boolean;
    updatedAt: string;
    createdAt: string;
    organizationId: string;
    propertyId: string;
    appliedTaxes: AppliedTaxesOrRates;
    feelessTotal: number;
    history?: (HistoryEntity1)[] | null;
    itemTaxBreakdown?: (ItemTaxBreakdownEntity)[] | null;
    itemTaxes: number;
    otherTaxes: number;
    remainingBalance: number;
    subtotal: number;
    taxes?: (null)[] | null;
    total: number;
    link: Link;
    connectAccount: string;
}
export interface HistoryEntity1 {
    time: string;
    who?: Who | null;
    addLineItem?: ItemsEntityOrAddLineItem1 | null;
    updatedTotal?: UpdatedTotal | null;
    addTaxes?: (null)[] | null;
    connectToAccount?: string | null;
}
export interface Who {
    userId: string;
    name: string;
}
export interface Link {
    type: string;
    id: string;
}
export interface Initiator {
    client: Client;
    startClient: string;
    token?: null;
    affiliateId?: null;
}
export interface Client {
    _id: string;
    clientId: string;
    clientSecret: string;
    role: string;
    updatedAt: string;
    createdAt: string;
    name: string;
    roles?: (string)[] | null;
}
export interface ActionsEntity {
    action: string;
    timestamp: string;
    userId: string;
    update?: Update | null;
}
export interface Update {
    type: string;
}
export interface Cost {
    cost: number;
    invoice: Invoice;
}
export interface SitesEntity {
    _id: string;
    name: string;
    siteType: string;
    description: string;
    length: number;
    overhead: number;
    guestLimit: string;
    electrical?: (string)[] | null;
    water: boolean;
    sewage: boolean;
    driverSlide: boolean;
    passengerSlide: boolean;
    backIn: boolean;
    images?: (ImagesEntity)[] | null;
    rates: AppliedTaxesOrRates;
    propertyId: string;
    updatedAt: string;
    createdAt: string;
    hidden: boolean;
    type: Type;
}
export interface ImagesEntity {
    imagePath: string;
    relativePath: string;
    width: number;
    height: number;
    ratio: number;
    smallThumbnail: string;
    smallThumbnailWebp: string;
    smallThumbnailWidth: number;
    smallThumbnailHeight: number;
    mediumThumbnail: string;
    mediumThumbnailWebp: string;
    mediumThumbnailWidth: number;
    mediumThumbnailHeight: number;
    largeThumbnail: string;
    largeThumbnailWebp: string;
    largeThumbnailWidth: number;
    largeThumbnailHeight: number;
    xLarge: string;
    xLargeWebp: string;
    xLargeWidth: number;
    xLargeHeight: number;
    xxLarge: string;
    xxLargeWebp: string;
    xxLargeWidth: number;
    xxLargeHeight: number;
}
export interface Type {
    _id: string;
    name: string;
    types?: (string)[] | null;
    guestLimit: string;
    description: string;
    rates: Rates;
    images: string;
    taxes: string;
    checkIn: string;
    checkOut: string;
    welcomeMessage: string;
    propertyId: string;
    updatedAt: string;
    createdAt: string;
    guests: Guests1;
    noPets: boolean;
}
export interface Rates {
    nightly: string;
    weekly: string;
    monthly: string;
}
export interface Guests1 {
    adults: AdultsOrChildrenOrPets;
    children: AdultsOrChildrenOrPets;
    pets: AdultsOrChildrenOrPets;
}
export interface AdultsOrChildrenOrPets {
    function: string;
    number: string;
}
