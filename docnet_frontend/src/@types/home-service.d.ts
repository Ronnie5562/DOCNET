import UserAccountDataType from "./profile-service";

export interface DoctorCardDetailsProps {
    id: string;
    user: UserAccountDataType;
    speciality: string;
    years_of_experience: number | null;
    num_of_patients: number;
    rating: number | null;
}

export interface DoctorListType {
    count: number;
    next: string | null;
    previous: string | null;
    results: DoctorCardDetailsProps[];
}

export interface HomeServiceProps {
    getDoctorsList: () => Promise<any>
}
