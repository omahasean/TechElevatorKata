import RestService from './RestService';

export default class StudentService extends RestService {
  constructor() {
    super('students');
  }
}
