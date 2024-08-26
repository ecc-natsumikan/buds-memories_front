export function validateName(name: string): string | null {
    if (!name) {
        return "名前を入力してください。";
    }
    return null;
}

export function validatePhoneNumber(phoneNumber: string): string | null {
    const phoneRegex = /^(?:\+81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/;
    if (!phoneNumber) {
        return "電話番号を入力してください。";
    } else if (!phoneRegex.test(phoneNumber)) {
        return "電話番号はハイフンなしの半角で入力してください";
    }
    return null;
}

export function validatePassword(password: string): string | null {
    if (!password) {
        return "パスワードを入力してください。";
    } else if (password.length < 6) {
        return "パスワードは6文字以上で入力してください";
    }
    return null;
}

export function validateEmail(email: string): string | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        return "正しいメールアドレスを入力してください。";
    }
    return null;
}

export function validateBirthday(birthday: string): boolean {
    // 任意入力だから空欄でもOK
    return birthday === "" || /\d{4}-\d{2}-\d{2}/.test(birthday);
}

export function validateEmailOrPhoneNumber(value: string): string | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/;

    if (!value) {
        return "このフィールドは必須です。";
    } else if (!emailRegex.test(value) && !phoneRegex.test(value)) {
        return "正しい形式で入力してください。";
    }
    return null;
}