// Validação de formulários

export interface ValidationError {
  field: string;
  message: string;
}

export interface ShippingInfo {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface PaymentInfo {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

// Validadores básicos
export const validators = {
  required: (value: string, fieldName: string): ValidationError | null => {
    if (!value || value.trim() === '') {
      return { field: fieldName, message: `${fieldName} é obrigatório` };
    }
    return null;
  },

  email: (value: string): ValidationError | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return { field: 'email', message: 'E-mail inválido' };
    }
    return null;
  },

  phone: (value: string): ValidationError | null => {
    // Aceita formatos: (11) 99999-9999, 11999999999, etc.
    const phoneClean = value.replace(/\D/g, '');
    if (phoneClean.length < 10 || phoneClean.length > 11) {
      return { field: 'phone', message: 'Telefone inválido' };
    }
    return null;
  },

  zipCode: (value: string): ValidationError | null => {
    const cepClean = value.replace(/\D/g, '');
    if (cepClean.length !== 8) {
      return { field: 'zipCode', message: 'CEP inválido (use 8 dígitos)' };
    }
    return null;
  },

  cardNumber: (value: string): ValidationError | null => {
    const cardClean = value.replace(/\D/g, '');
    if (cardClean.length < 13 || cardClean.length > 19) {
      return { field: 'cardNumber', message: 'Número do cartão inválido' };
    }
    return null;
  },

  expiryDate: (value: string): ValidationError | null => {
    const match = value.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/);
    if (!match) {
      return { field: 'expiryDate', message: 'Data inválida (use MM/AA)' };
    }
    const month = parseInt(match[1], 10);
    const year = parseInt('20' + match[2], 10);
    const now = new Date();
    const expiry = new Date(year, month);
    if (expiry < now) {
      return { field: 'expiryDate', message: 'Cartão expirado' };
    }
    return null;
  },

  cvv: (value: string): ValidationError | null => {
    if (!/^\d{3,4}$/.test(value)) {
      return { field: 'cvv', message: 'CVV inválido' };
    }
    return null;
  },
};

// Validar endereço completo
export function validateShippingInfo(info: ShippingInfo): ValidationError[] {
  const errors: ValidationError[] = [];

  const requiredError = validators.required(info.name, 'Nome');
  if (requiredError) errors.push(requiredError);

  const emailRequired = validators.required(info.email, 'E-mail');
  if (emailRequired) {
    errors.push(emailRequired);
  } else {
    const emailError = validators.email(info.email);
    if (emailError) errors.push(emailError);
  }

  const phoneRequired = validators.required(info.phone, 'Telefone');
  if (phoneRequired) {
    errors.push(phoneRequired);
  } else {
    const phoneError = validators.phone(info.phone);
    if (phoneError) errors.push(phoneError);
  }

  const zipRequired = validators.required(info.zipCode, 'CEP');
  if (zipRequired) {
    errors.push(zipRequired);
  } else {
    const zipError = validators.zipCode(info.zipCode);
    if (zipError) errors.push(zipError);
  }

  const streetError = validators.required(info.street, 'Rua');
  if (streetError) errors.push(streetError);

  const numberError = validators.required(info.number, 'Número');
  if (numberError) errors.push(numberError);

  const neighborhoodError = validators.required(info.neighborhood, 'Bairro');
  if (neighborhoodError) errors.push(neighborhoodError);

  const cityError = validators.required(info.city, 'Cidade');
  if (cityError) errors.push(cityError);

  const stateError = validators.required(info.state, 'Estado');
  if (stateError) errors.push(stateError);

  return errors;
}

// Validar pagamento (cartão de crédito)
export function validatePaymentInfo(info: PaymentInfo): ValidationError[] {
  const errors: ValidationError[] = [];

  const cardNumberRequired = validators.required(info.cardNumber, 'Número do cartão');
  if (cardNumberRequired) {
    errors.push(cardNumberRequired);
  } else {
    const cardNumberError = validators.cardNumber(info.cardNumber);
    if (cardNumberError) errors.push(cardNumberError);
  }

  const cardNameError = validators.required(info.cardName, 'Nome no cartão');
  if (cardNameError) errors.push(cardNameError);

  const expiryRequired = validators.required(info.expiryDate, 'Validade');
  if (expiryRequired) {
    errors.push(expiryRequired);
  } else {
    const expiryError = validators.expiryDate(info.expiryDate);
    if (expiryError) errors.push(expiryError);
  }

  const cvvRequired = validators.required(info.cvv, 'CVV');
  if (cvvRequired) {
    errors.push(cvvRequired);
  } else {
    const cvvError = validators.cvv(info.cvv);
    if (cvvError) errors.push(cvvError);
  }

  return errors;
}

// Máscaras de input
export const masks = {
  phone: (value: string): string => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  },

  zipCode: (value: string): string => {
    const numbers = value.replace(/\D/g, '').slice(0, 8);
    if (numbers.length <= 5) return numbers;
    return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
  },

  cardNumber: (value: string): string => {
    const numbers = value.replace(/\D/g, '').slice(0, 16);
    return numbers.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  },

  expiryDate: (value: string): string => {
    const numbers = value.replace(/\D/g, '').slice(0, 4);
    if (numbers.length <= 2) return numbers;
    return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
  },

  cvv: (value: string): string => {
    return value.replace(/\D/g, '').slice(0, 4);
  },
};
