export interface ProfileServiceProps {
    // login: (username: string, password: string) => any;
    isLoggedIn: boolean;
    refreshAccessToken: () => Promise<void>
    getUserAccountDetails: () => any;
    getUserProfileDetails: () => any;
    // register: (username: string, password: string, firstname: string, lastname: string) => Promise<any>;
}

// This type is used to receive data stored in localstorage when user logs in.
export interface UserDataType {
    email: string,
    role: string,
    first_name: string,
    last_name: string,
    picture: string,
}


export interface UserAccountDataType {
    id: string,
    timezone: string,
    email: string,
    role: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    country: string,
    picture: string,
    date_joined: string
}

export interface DocumentType {
    id: number;
    caption: string;
    file: string;
    profile: string;
    uploaded_at: string;
    modified_at: string;
};

export interface PatientProfileDataType {
    id: string;
    user: UserAccountData;
    bio: string;
    date_of_birth: string;
    gender: string;
    address: string;
    zip_code: string;
    city: string;
    country: string;
    languages: Record<string, string>;
    medical_history: string;
    allergies: string;
    current_medications: string;
    documents: DocumentType[];
}

export interface DoctorProfileDataType {
    id: string;
    user: UserAccountData;
    bio: string;
    date_of_birth: string;
    gender: string;
    address: string;
    zip_code: string;
    city: string;
    country: string;
    languages: Record<string, string>;
    speciality: string;
    license_number: string;
    years_of_experience: number;
    education: string;
    certifications: string;
    awards: string;
    professional_statement: string;
    documents: DocumentType[];
}
