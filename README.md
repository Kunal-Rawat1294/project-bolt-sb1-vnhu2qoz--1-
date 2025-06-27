## Tool Types

This project defines reusable TypeScript interfaces for describing configurable tools and their options.

### `ToolOption`

Represents a single configurable option for a tool.

```typescript
export interface ToolOption {
  type: 'text' | 'number' | 'range' | 'select' | 'password';
  label: string;
  key: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  defaultValue?: any;
}
```

### `ToolDefinition`

Describes a tool that can process files with user-configurable options.

```typescript
export interface ToolDefinition {
  title: string;
  description: string;
  icon: ReactNode;
  acceptedTypes: string[];
  multiple: boolean;
  options?: ToolOption[];
  process: (files: File[], options?: Record<string, any>) => Promise<string>;
}
```

Use these types to define new tools and their options in your
