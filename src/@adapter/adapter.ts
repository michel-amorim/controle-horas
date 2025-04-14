export type Adapter<From, To> = (from: From) => To;

export type AdapterLogin<From, To> = (from: From, permissoes: string[]) => To;
