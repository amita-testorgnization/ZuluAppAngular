export class cases{
    caseId:number;
    Title:string;
    CompanyName:string;
    UserType:string;
    Status:string;
    Comment:string;
    MRN:string;
}
export class CaseStatus{
    StatusId:number;
    StatusTitle:string;
}

export class UploadCodingDoc{
    UploadCodingDocId:string;
    PatientName:string;
    MRN:string
    UploadCodingDoc:string;
    ChargeQuery:string;
    UserId:string;
    CaseId:string;
}