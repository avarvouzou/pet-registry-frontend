export class CreatePet {
  name = "";
  type = "";
  sex = "";
  birthday = "";
  breed = "";
  microchipNumber = ""
}

export class PetDetails {
  id = "";
  name = "";
  type = "";
  sex = "";
  birthday = "";
  microchipNumber: 0;
  breed = "";
  medical_history = "";
  status = "";
  ownerId = "";
  reviewerId = "";
}

export interface ReviewPet {
  id: string;
  reviewerId: string;
  status: string;
  medicalHistory: string;
}
