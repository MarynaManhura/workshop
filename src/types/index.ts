import { type ReactNode } from 'react';

// ---- Button ----
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

// ---- Input ----
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
}

// ---- Badge ----
export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'lavender';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

// ---- Card ----
export interface CardProps {
  children: ReactNode;
  className?: string;
}

// ---- Alert ----
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  className?: string;
}

// ---- Avatar ----
export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  className?: string;
}

// ---- Toggle ----
export interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

// ---- Showcase helpers ----
export interface ShowcaseSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export interface CodeBlockProps {
  code: string;
  language?: string;
}
