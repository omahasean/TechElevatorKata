import RestService from './RestService'

/**
 * Service implementation for getting and modifying Student resources.
 */
export default class StudentScoreService extends RestService {
    constructor() {
      super('studentScores');
    }
  }