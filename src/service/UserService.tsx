//import http from "../http-common";

class UserService {
    getAll() {
        return mockup;
    }

    get(id:number) {
        return mockup.find(x => x.id === id);
    }
    /*
      create(data) {
        return http.post("/tutorials", data);
      }
    
      update(id, data) {
        return http.put(`/tutorials/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`/tutorials/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/tutorials`);
      }
    
      findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
      }
      */
}

export default new UserService();

const mockup = [	{		id: 0,		rpe: 0,		telefone1: 'telefone1-0',		telefone2: 'telefone2-0',		email1: 'email1-0',		email2: 'email2-0',		cia: 'companhia-0',		sigla: 'sigla-0',	},	{		id: 1,		rpe: 1,		telefone1: 'telefone1-1',		telefone2: 'telefone2-1',		email1: 'email1-1',		email2: 'email2-1',		cia: 'companhia-1',		sigla: 'sigla-1',	},	{		id: 2,		rpe: 2,		telefone1: 'telefone1-2',		telefone2: 'telefone2-2',		email1: 'email1-2',		email2: 'email2-2',		cia: 'companhia-2',		sigla: 'sigla-2',	},	{		id: 3,		rpe: 3,		telefone1: 'telefone1-3',		telefone2: 'telefone2-3',		email1: 'email1-3',		email2: 'email2-3',		cia: 'companhia-3',		sigla: 'sigla-3',	},	{		id: 4,		rpe: 4,		telefone1: 'telefone1-4',		telefone2: 'telefone2-4',		email1: 'email1-4',		email2: 'email2-4',		cia: 'companhia-4',		sigla: 'sigla-4',	},	{		id: 5,		rpe: 5,		telefone1: 'telefone1-5',		telefone2: 'telefone2-5',		email1: 'email1-5',		email2: 'email2-5',		cia: 'companhia-5',		sigla: 'sigla-5',	},	{		id: 6,		rpe: 6,		telefone1: 'telefone1-6',		telefone2: 'telefone2-6',		email1: 'email1-6',		email2: 'email2-6',		cia: 'companhia-6',		sigla: 'sigla-6',	},	{		id: 7,		rpe: 7,		telefone1: 'telefone1-7',		telefone2: 'telefone2-7',		email1: 'email1-7',		email2: 'email2-7',		cia: 'companhia-7',		sigla: 'sigla-7',	},	{		id: 8,		rpe: 8,		telefone1: 'telefone1-8',		telefone2: 'telefone2-8',		email1: 'email1-8',		email2: 'email2-8',		cia: 'companhia-8',		sigla: 'sigla-8',	},	{		id: 9,		rpe: 9,		telefone1: 'telefone1-9',		telefone2: 'telefone2-9',		email1: 'email1-9',		email2: 'email2-9',		cia: 'companhia-9',		sigla: 'sigla-9',	},	{		id: 10,		rpe: 10,		telefone1: 'telefone1-10',		telefone2: 'telefone2-10',		email1: 'email1-10',		email2: 'email2-10',		cia: 'companhia-10',		sigla: 'sigla-10',	},	{		id: 11,		rpe: 11,		telefone1: 'telefone1-11',		telefone2: 'telefone2-11',		email1: 'email1-11',		email2: 'email2-11',		cia: 'companhia-11',		sigla: 'sigla-11',	},	{		id: 12,		rpe: 12,		telefone1: 'telefone1-12',		telefone2: 'telefone2-12',		email1: 'email1-12',		email2: 'email2-12',		cia: 'companhia-12',		sigla: 'sigla-12',	},	{		id: 13,		rpe: 13,		telefone1: 'telefone1-13',		telefone2: 'telefone2-13',		email1: 'email1-13',		email2: 'email2-13',		cia: 'companhia-13',		sigla: 'sigla-13',	},	{		id: 14,		rpe: 14,		telefone1: 'telefone1-14',		telefone2: 'telefone2-14',		email1: 'email1-14',		email2: 'email2-14',		cia: 'companhia-14',		sigla: 'sigla-14',	},	{		id: 15,		rpe: 15,		telefone1: 'telefone1-15',		telefone2: 'telefone2-15',		email1: 'email1-15',		email2: 'email2-15',		cia: 'companhia-15',		sigla: 'sigla-15',	},	{		id: 16,		rpe: 16,		telefone1: 'telefone1-16',		telefone2: 'telefone2-16',		email1: 'email1-16',		email2: 'email2-16',		cia: 'companhia-16',		sigla: 'sigla-16',	},	{		id: 17,		rpe: 17,		telefone1: 'telefone1-17',		telefone2: 'telefone2-17',		email1: 'email1-17',		email2: 'email2-17',		cia: 'companhia-17',		sigla: 'sigla-17',	},	{		id: 18,		rpe: 18,		telefone1: 'telefone1-18',		telefone2: 'telefone2-18',		email1: 'email1-18',		email2: 'email2-18',		cia: 'companhia-18',		sigla: 'sigla-18',	},	{		id: 19,		rpe: 19,		telefone1: 'telefone1-19',		telefone2: 'telefone2-19',		email1: 'email1-19',		email2: 'email2-19',		cia: 'companhia-19',		sigla: 'sigla-19',	},	{		id: 20,		rpe: 20,		telefone1: 'telefone1-20',		telefone2: 'telefone2-20',		email1: 'email1-20',		email2: 'email2-20',		cia: 'companhia-20',		sigla: 'sigla-20',	},	{		id: 21,		rpe: 21,		telefone1: 'telefone1-21',		telefone2: 'telefone2-21',		email1: 'email1-21',		email2: 'email2-21',		cia: 'companhia-21',		sigla: 'sigla-21',	},	{		id: 22,		rpe: 22,		telefone1: 'telefone1-22',		telefone2: 'telefone2-22',		email1: 'email1-22',		email2: 'email2-22',		cia: 'companhia-22',		sigla: 'sigla-22',	},	{		id: 23,		rpe: 23,		telefone1: 'telefone1-23',		telefone2: 'telefone2-23',		email1: 'email1-23',		email2: 'email2-23',		cia: 'companhia-23',		sigla: 'sigla-23',	},	{		id: 24,		rpe: 24,		telefone1: 'telefone1-24',		telefone2: 'telefone2-24',		email1: 'email1-24',		email2: 'email2-24',		cia: 'companhia-24',		sigla: 'sigla-24',	},	{		id: 25,		rpe: 25,		telefone1: 'telefone1-25',		telefone2: 'telefone2-25',		email1: 'email1-25',		email2: 'email2-25',		cia: 'companhia-25',		sigla: 'sigla-25',	},	{		id: 26,		rpe: 26,		telefone1: 'telefone1-26',		telefone2: 'telefone2-26',		email1: 'email1-26',		email2: 'email2-26',		cia: 'companhia-26',		sigla: 'sigla-26',	},	{		id: 27,		rpe: 27,		telefone1: 'telefone1-27',		telefone2: 'telefone2-27',		email1: 'email1-27',		email2: 'email2-27',		cia: 'companhia-27',		sigla: 'sigla-27',	},	{		id: 28,		rpe: 28,		telefone1: 'telefone1-28',		telefone2: 'telefone2-28',		email1: 'email1-28',		email2: 'email2-28',		cia: 'companhia-28',		sigla: 'sigla-28',	},	{		id: 29,		rpe: 29,		telefone1: 'telefone1-29',		telefone2: 'telefone2-29',		email1: 'email1-29',		email2: 'email2-29',		cia: 'companhia-29',		sigla: 'sigla-29',	},	{		id: 30,		rpe: 30,		telefone1: 'telefone1-30',		telefone2: 'telefone2-30',		email1: 'email1-30',		email2: 'email2-30',		cia: 'companhia-30',		sigla: 'sigla-30',	},	{		id: 31,		rpe: 31,		telefone1: 'telefone1-31',		telefone2: 'telefone2-31',		email1: 'email1-31',		email2: 'email2-31',		cia: 'companhia-31',		sigla: 'sigla-31',	},	{		id: 32,		rpe: 32,		telefone1: 'telefone1-32',		telefone2: 'telefone2-32',		email1: 'email1-32',		email2: 'email2-32',		cia: 'companhia-32',		sigla: 'sigla-32',	},	{		id: 33,		rpe: 33,		telefone1: 'telefone1-33',		telefone2: 'telefone2-33',		email1: 'email1-33',		email2: 'email2-33',		cia: 'companhia-33',		sigla: 'sigla-33',	},	{		id: 34,		rpe: 34,		telefone1: 'telefone1-34',		telefone2: 'telefone2-34',		email1: 'email1-34',		email2: 'email2-34',		cia: 'companhia-34',		sigla: 'sigla-34',	},	{		id: 35,		rpe: 35,		telefone1: 'telefone1-35',		telefone2: 'telefone2-35',		email1: 'email1-35',		email2: 'email2-35',		cia: 'companhia-35',		sigla: 'sigla-35',	},	{		id: 36,		rpe: 36,		telefone1: 'telefone1-36',		telefone2: 'telefone2-36',		email1: 'email1-36',		email2: 'email2-36',		cia: 'companhia-36',		sigla: 'sigla-36',	},	{		id: 37,		rpe: 37,		telefone1: 'telefone1-37',		telefone2: 'telefone2-37',		email1: 'email1-37',		email2: 'email2-37',		cia: 'companhia-37',		sigla: 'sigla-37',	},	{		id: 38,		rpe: 38,		telefone1: 'telefone1-38',		telefone2: 'telefone2-38',		email1: 'email1-38',		email2: 'email2-38',		cia: 'companhia-38',		sigla: 'sigla-38',	},	{		id: 39,		rpe: 39,		telefone1: 'telefone1-39',		telefone2: 'telefone2-39',		email1: 'email1-39',		email2: 'email2-39',		cia: 'companhia-39',		sigla: 'sigla-39',	},	{		id: 40,		rpe: 40,		telefone1: 'telefone1-40',		telefone2: 'telefone2-40',		email1: 'email1-40',		email2: 'email2-40',		cia: 'companhia-40',		sigla: 'sigla-40',	},	{		id: 41,		rpe: 41,		telefone1: 'telefone1-41',		telefone2: 'telefone2-41',		email1: 'email1-41',		email2: 'email2-41',		cia: 'companhia-41',		sigla: 'sigla-41',	},	{		id: 42,		rpe: 42,		telefone1: 'telefone1-42',		telefone2: 'telefone2-42',		email1: 'email1-42',		email2: 'email2-42',		cia: 'companhia-42',		sigla: 'sigla-42',	},	{		id: 43,		rpe: 43,		telefone1: 'telefone1-43',		telefone2: 'telefone2-43',		email1: 'email1-43',		email2: 'email2-43',		cia: 'companhia-43',		sigla: 'sigla-43',	},	{		id: 44,		rpe: 44,		telefone1: 'telefone1-44',		telefone2: 'telefone2-44',		email1: 'email1-44',		email2: 'email2-44',		cia: 'companhia-44',		sigla: 'sigla-44',	},	{		id: 45,		rpe: 45,		telefone1: 'telefone1-45',		telefone2: 'telefone2-45',		email1: 'email1-45',		email2: 'email2-45',		cia: 'companhia-45',		sigla: 'sigla-45',	},	{		id: 46,		rpe: 46,		telefone1: 'telefone1-46',		telefone2: 'telefone2-46',		email1: 'email1-46',		email2: 'email2-46',		cia: 'companhia-46',		sigla: 'sigla-46',	},	{		id: 47,		rpe: 47,		telefone1: 'telefone1-47',		telefone2: 'telefone2-47',		email1: 'email1-47',		email2: 'email2-47',		cia: 'companhia-47',		sigla: 'sigla-47',	},	{		id: 48,		rpe: 48,		telefone1: 'telefone1-48',		telefone2: 'telefone2-48',		email1: 'email1-48',		email2: 'email2-48',		cia: 'companhia-48',		sigla: 'sigla-48',	},	{		id: 49,		rpe: 49,		telefone1: 'telefone1-49',		telefone2: 'telefone2-49',		email1: 'email1-49',		email2: 'email2-49',		cia: 'companhia-49',		sigla: 'sigla-49',	},	{		id: 50,		rpe: 50,		telefone1: 'telefone1-50',		telefone2: 'telefone2-50',		email1: 'email1-50',		email2: 'email2-50',		cia: 'companhia-50',		sigla: 'sigla-50',	},	{		id: 51,		rpe: 51,		telefone1: 'telefone1-51',		telefone2: 'telefone2-51',		email1: 'email1-51',		email2: 'email2-51',		cia: 'companhia-51',		sigla: 'sigla-51',	},	{		id: 52,		rpe: 52,		telefone1: 'telefone1-52',		telefone2: 'telefone2-52',		email1: 'email1-52',		email2: 'email2-52',		cia: 'companhia-52',		sigla: 'sigla-52',	},	{		id: 53,		rpe: 53,		telefone1: 'telefone1-53',		telefone2: 'telefone2-53',		email1: 'email1-53',		email2: 'email2-53',		cia: 'companhia-53',		sigla: 'sigla-53',	},	{		id: 54,		rpe: 54,		telefone1: 'telefone1-54',		telefone2: 'telefone2-54',		email1: 'email1-54',		email2: 'email2-54',		cia: 'companhia-54',		sigla: 'sigla-54',	},	{		id: 55,		rpe: 55,		telefone1: 'telefone1-55',		telefone2: 'telefone2-55',		email1: 'email1-55',		email2: 'email2-55',		cia: 'companhia-55',		sigla: 'sigla-55',	},	{		id: 56,		rpe: 56,		telefone1: 'telefone1-56',		telefone2: 'telefone2-56',		email1: 'email1-56',		email2: 'email2-56',		cia: 'companhia-56',		sigla: 'sigla-56',	},	{		id: 57,		rpe: 57,		telefone1: 'telefone1-57',		telefone2: 'telefone2-57',		email1: 'email1-57',		email2: 'email2-57',		cia: 'companhia-57',		sigla: 'sigla-57',	},	{		id: 58,		rpe: 58,		telefone1: 'telefone1-58',		telefone2: 'telefone2-58',		email1: 'email1-58',		email2: 'email2-58',		cia: 'companhia-58',		sigla: 'sigla-58',	},	{		id: 59,		rpe: 59,		telefone1: 'telefone1-59',		telefone2: 'telefone2-59',		email1: 'email1-59',		email2: 'email2-59',		cia: 'companhia-59',		sigla: 'sigla-59',	},	{		id: 60,		rpe: 60,		telefone1: 'telefone1-60',		telefone2: 'telefone2-60',		email1: 'email1-60',		email2: 'email2-60',		cia: 'companhia-60',		sigla: 'sigla-60',	},	{		id: 61,		rpe: 61,		telefone1: 'telefone1-61',		telefone2: 'telefone2-61',		email1: 'email1-61',		email2: 'email2-61',		cia: 'companhia-61',		sigla: 'sigla-61',	},	{		id: 62,		rpe: 62,		telefone1: 'telefone1-62',		telefone2: 'telefone2-62',		email1: 'email1-62',		email2: 'email2-62',		cia: 'companhia-62',		sigla: 'sigla-62',	},	{		id: 63,		rpe: 63,		telefone1: 'telefone1-63',		telefone2: 'telefone2-63',		email1: 'email1-63',		email2: 'email2-63',		cia: 'companhia-63',		sigla: 'sigla-63',	},	{		id: 64,		rpe: 64,		telefone1: 'telefone1-64',		telefone2: 'telefone2-64',		email1: 'email1-64',		email2: 'email2-64',		cia: 'companhia-64',		sigla: 'sigla-64',	},	{		id: 65,		rpe: 65,		telefone1: 'telefone1-65',		telefone2: 'telefone2-65',		email1: 'email1-65',		email2: 'email2-65',		cia: 'companhia-65',		sigla: 'sigla-65',	},	{		id: 66,		rpe: 66,		telefone1: 'telefone1-66',		telefone2: 'telefone2-66',		email1: 'email1-66',		email2: 'email2-66',		cia: 'companhia-66',		sigla: 'sigla-66',	},	{		id: 67,		rpe: 67,		telefone1: 'telefone1-67',		telefone2: 'telefone2-67',		email1: 'email1-67',		email2: 'email2-67',		cia: 'companhia-67',		sigla: 'sigla-67',	},	{		id: 68,		rpe: 68,		telefone1: 'telefone1-68',		telefone2: 'telefone2-68',		email1: 'email1-68',		email2: 'email2-68',		cia: 'companhia-68',		sigla: 'sigla-68',	},	{		id: 69,		rpe: 69,		telefone1: 'telefone1-69',		telefone2: 'telefone2-69',		email1: 'email1-69',		email2: 'email2-69',		cia: 'companhia-69',		sigla: 'sigla-69',	},	{		id: 70,		rpe: 70,		telefone1: 'telefone1-70',		telefone2: 'telefone2-70',		email1: 'email1-70',		email2: 'email2-70',		cia: 'companhia-70',		sigla: 'sigla-70',	},	{		id: 71,		rpe: 71,		telefone1: 'telefone1-71',		telefone2: 'telefone2-71',		email1: 'email1-71',		email2: 'email2-71',		cia: 'companhia-71',		sigla: 'sigla-71',	},	{		id: 72,		rpe: 72,		telefone1: 'telefone1-72',		telefone2: 'telefone2-72',		email1: 'email1-72',		email2: 'email2-72',		cia: 'companhia-72',		sigla: 'sigla-72',	},	{		id: 73,		rpe: 73,		telefone1: 'telefone1-73',		telefone2: 'telefone2-73',		email1: 'email1-73',		email2: 'email2-73',		cia: 'companhia-73',		sigla: 'sigla-73',	},	{		id: 74,		rpe: 74,		telefone1: 'telefone1-74',		telefone2: 'telefone2-74',		email1: 'email1-74',		email2: 'email2-74',		cia: 'companhia-74',		sigla: 'sigla-74',	},	{		id: 75,		rpe: 75,		telefone1: 'telefone1-75',		telefone2: 'telefone2-75',		email1: 'email1-75',		email2: 'email2-75',		cia: 'companhia-75',		sigla: 'sigla-75',	},	{		id: 76,		rpe: 76,		telefone1: 'telefone1-76',		telefone2: 'telefone2-76',		email1: 'email1-76',		email2: 'email2-76',		cia: 'companhia-76',		sigla: 'sigla-76',	},	{		id: 77,		rpe: 77,		telefone1: 'telefone1-77',		telefone2: 'telefone2-77',		email1: 'email1-77',		email2: 'email2-77',		cia: 'companhia-77',		sigla: 'sigla-77',	},	{		id: 78,		rpe: 78,		telefone1: 'telefone1-78',		telefone2: 'telefone2-78',		email1: 'email1-78',		email2: 'email2-78',		cia: 'companhia-78',		sigla: 'sigla-78',	},	{		id: 79,		rpe: 79,		telefone1: 'telefone1-79',		telefone2: 'telefone2-79',		email1: 'email1-79',		email2: 'email2-79',		cia: 'companhia-79',		sigla: 'sigla-79',	},	{		id: 80,		rpe: 80,		telefone1: 'telefone1-80',		telefone2: 'telefone2-80',		email1: 'email1-80',		email2: 'email2-80',		cia: 'companhia-80',		sigla: 'sigla-80',	},	{		id: 81,		rpe: 81,		telefone1: 'telefone1-81',		telefone2: 'telefone2-81',		email1: 'email1-81',		email2: 'email2-81',		cia: 'companhia-81',		sigla: 'sigla-81',	},	{		id: 82,		rpe: 82,		telefone1: 'telefone1-82',		telefone2: 'telefone2-82',		email1: 'email1-82',		email2: 'email2-82',		cia: 'companhia-82',		sigla: 'sigla-82',	},	{		id: 83,		rpe: 83,		telefone1: 'telefone1-83',		telefone2: 'telefone2-83',		email1: 'email1-83',		email2: 'email2-83',		cia: 'companhia-83',		sigla: 'sigla-83',	},	{		id: 84,		rpe: 84,		telefone1: 'telefone1-84',		telefone2: 'telefone2-84',		email1: 'email1-84',		email2: 'email2-84',		cia: 'companhia-84',		sigla: 'sigla-84',	},	{		id: 85,		rpe: 85,		telefone1: 'telefone1-85',		telefone2: 'telefone2-85',		email1: 'email1-85',		email2: 'email2-85',		cia: 'companhia-85',		sigla: 'sigla-85',	},	{		id: 86,		rpe: 86,		telefone1: 'telefone1-86',		telefone2: 'telefone2-86',		email1: 'email1-86',		email2: 'email2-86',		cia: 'companhia-86',		sigla: 'sigla-86',	},	{		id: 87,		rpe: 87,		telefone1: 'telefone1-87',		telefone2: 'telefone2-87',		email1: 'email1-87',		email2: 'email2-87',		cia: 'companhia-87',		sigla: 'sigla-87',	},	{		id: 88,		rpe: 88,		telefone1: 'telefone1-88',		telefone2: 'telefone2-88',		email1: 'email1-88',		email2: 'email2-88',		cia: 'companhia-88',		sigla: 'sigla-88',	},	{		id: 89,		rpe: 89,		telefone1: 'telefone1-89',		telefone2: 'telefone2-89',		email1: 'email1-89',		email2: 'email2-89',		cia: 'companhia-89',		sigla: 'sigla-89',	},	{		id: 90,		rpe: 90,		telefone1: 'telefone1-90',		telefone2: 'telefone2-90',		email1: 'email1-90',		email2: 'email2-90',		cia: 'companhia-90',		sigla: 'sigla-90',	},	{		id: 91,		rpe: 91,		telefone1: 'telefone1-91',		telefone2: 'telefone2-91',		email1: 'email1-91',		email2: 'email2-91',		cia: 'companhia-91',		sigla: 'sigla-91',	},	{		id: 92,		rpe: 92,		telefone1: 'telefone1-92',		telefone2: 'telefone2-92',		email1: 'email1-92',		email2: 'email2-92',		cia: 'companhia-92',		sigla: 'sigla-92',	},	{		id: 93,		rpe: 93,		telefone1: 'telefone1-93',		telefone2: 'telefone2-93',		email1: 'email1-93',		email2: 'email2-93',		cia: 'companhia-93',		sigla: 'sigla-93',	},	{		id: 94,		rpe: 94,		telefone1: 'telefone1-94',		telefone2: 'telefone2-94',		email1: 'email1-94',		email2: 'email2-94',		cia: 'companhia-94',		sigla: 'sigla-94',	},	{		id: 95,		rpe: 95,		telefone1: 'telefone1-95',		telefone2: 'telefone2-95',		email1: 'email1-95',		email2: 'email2-95',		cia: 'companhia-95',		sigla: 'sigla-95',	},	{		id: 96,		rpe: 96,		telefone1: 'telefone1-96',		telefone2: 'telefone2-96',		email1: 'email1-96',		email2: 'email2-96',		cia: 'companhia-96',		sigla: 'sigla-96',	},	{		id: 97,		rpe: 97,		telefone1: 'telefone1-97',		telefone2: 'telefone2-97',		email1: 'email1-97',		email2: 'email2-97',		cia: 'companhia-97',		sigla: 'sigla-97',	},	{		id: 98,		rpe: 98,		telefone1: 'telefone1-98',		telefone2: 'telefone2-98',		email1: 'email1-98',		email2: 'email2-98',		cia: 'companhia-98',		sigla: 'sigla-98',	},	{		id: 99,		rpe: 99,		telefone1: 'telefone1-99',		telefone2: 'telefone2-99',		email1: 'email1-99',		email2: 'email2-99',		cia: 'companhia-99',		sigla: 'sigla-99',	},]