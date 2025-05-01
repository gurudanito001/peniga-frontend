/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Email {
  id: string;
  email: string;
  verified: boolean;
  code: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  isActive?: boolean | null;
  role: UserRole;
  showProfileImg?: boolean | null;
  country?: string | null;
  email: string;
  password: string;
  online?: boolean | null;
  profileImage?: string | null;
  emailVerified?: boolean | null;
  allowNotification?: boolean | null;
  deletedAt?: Date | null;
  contractBuyer: Contract[];
  contractSeller: Contract[];
  escrowBuyer: Escrow[];
  escrowSeller: Escrow[];
  transactionSender: Transaction[];
  disputeRaiser: Dispute[];
  disputeBuyer: Dispute[];
  disputeSeller: Dispute[];
  disputeWinner: Dispute[];
  messageSender: Message[];
  messageReceiver: Message[];
  payments: Payment[];
  paymentAccounts: PaymentAccount[];
  notifications: Notification[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Contract {
  id?: string;
  user?: User | null;
  userId?: string | null;
  buyerId?: string | null;
  buyer?: User | null;
  sellerId?: string | null;
  seller?: User | null;
  title: string;
  currency?: string;
  inspectionPeriod: number;
  startDate?: Date;
  endDate?: Date | null;
  agreementTerms?: any | null; // Represents Json
  toBeInformed?: any;           // Represents Json
  escrowFeePaidBy?: "buyer" | "seller" | "split";
  contractItems: ContractItem[];
  attachments?: Attachment[];
  transactions?: Transaction[];
  status?: ContractStatus;
  stage?: "CREATED" | "AGREED" | "PAID" | "DELIVERED" | "INSPECTED" | "COMPLETED";
  escrowId?: string | null;
  escrow?: Escrow | null;
  paymentId?: string | null;
  payment?: Payment | null;
  disputeId?: string | null;
  dispute?: Dispute | null;
  tempAccountId?: string | null;
  tempAccount?: TempAccount | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Attachment {
  id: string;
  contractId?: string | null;
  contract?: Contract | null;
  disputeId?: string | null;
  dispute?: Dispute | null;
  fileName: string;
  fileUrl: string;
  fileType?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContractItem {
  id: string | number;
  contractId?: string;
  contract?: Contract;
  itemName?: string;
  quantity: number | string;
  price: number | string;
  description: string ;
  imageUrl?: string | null;
  image?: string
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Escrow {
  id: string;
  buyerId: string;
  buyer: User;
  sellerId: string;
  seller: User;
  contractId: string;
  contract: Contract;
  amount: number;
  fee?: number | null;
  status: EscrowStatus;
  transactions: Transaction[];
  paymentId?: string | null;
  payment?: Payment | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  spId?: string | null;
  senderId: string;
  sender: User;
  amount: number;
  contractId: string;
  contract: Contract;
  escrowId: string;
  escrow: Escrow;
  currency: string;
  status: TransactionStatus;
  transactionData?: any | null; // Represents Json
  createdAt: Date;
  updatedAt: Date;
}

export interface Dispute {
  id: string;
  raisedById: string;
  raisedBy: User;
  contractId: string;
  contract: Contract;
  buyerId: string;
  buyer: User;
  sellerId: string;
  seller: User;
  reason: string;
  attachments: Attachment[];
  disputeWinnerId?: string | null;
  disputeWinner?: User | null;
  status?: DisputeStatus | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  userId: string;
  user: User;
  contractId: string;
  contract: Contract;
  escrowId: string;
  escrow: Escrow;
  amount: number;
  redemptionCode?: string | null;
  status: PaymentStatus;
  category?: PaymentCategory | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  senderId?: string | null;
  sender?: User | null;
  receiverId?: string | null;
  receiver?: User | null;
  resourceId?: string | null;
  resourceUrl?: string | null;
  message?: string | null;
  viewed?: boolean | null;
  appMessage: boolean;
  extraData?: any | null;   // Represents Json
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TempAccount {
  id: string;
  contractId: string;
  contract: Contract;
  accountDetails: any; // Represents Json
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentAccount {
  id: string;
  userId: string;
  user: User;
  bankName: string;
  accountName: string;
  accountNumber: string;
  bankDetails?: any | null; // Represents Json
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  userId?: string | null;
  user?: User | null;
  content: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum ContractStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  TERMINATED = "TERMINATED",
  DISPUTED = "DISPUTED",
}

export enum ContractStage {
  CREATED = "CREATED",
  AGREED = "AGREED",
  PAID = "PAID",
  DELIVERED = "DELIVERED",
  INSPECTED = "INSPECTED",
  COMPLETED = "COMPLETED",
}

export enum TransactionStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export enum EscrowStatus {
  PENDING = "PENDING",
  REVERTED = "REVERTED",
  DISBURSED = "DISBURSED",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
}

export enum DisputeStatus {
  PENDING = "PENDING",
  RESOLVED = "RESOLVED",
}

export enum PaymentCategory {
  REFUNDED = "REFUNDED",
  DISBURSED = "DISBURSED",
}

export enum EscrowFeePayers {
  buyer = "buyer",
  seller = "seller",
  split = "split",
}

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPPORT = "SUPPORT",
}

export enum ProductCategory {
  techGadgets = "techGadgets",
  automobiles = "automobiles",
  realEstate = "realEstate",
}

export interface userTokenData {
  email: string
  exp: number
  expires: string
  type: string
  userId: string
}

export interface Bank {
  id: number;
  code: string;
  name: string;
}