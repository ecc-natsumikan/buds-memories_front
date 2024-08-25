// lib/api/validateFields.ts
export function validateName(name: string): boolean {
    return name.length > 0;
}

export function validatePhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^(?:\+81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/;
    return phoneRegex.test(phoneNumber);
}

export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
    return password.length >= 6; // パスワードは最低6文字
}

export function validateBirthday(birthday: string): boolean {
    // 任意入力なので空欄でもOK
    return birthday === "" || /\d{4}-\d{2}-\d{2}/.test(birthday);
}
