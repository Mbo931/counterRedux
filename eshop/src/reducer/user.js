// Définition de l'état initial de l'utilisateur
const userInit = {
  firstname: 'John',
  lastname: 'Doe',
  email: 'jd@gmail.com',
};

export const userAction = {
  setUser: 'SET_USER',
};

// Définition du reducer pour gérer les changements d'état de l'utilisateur
export default function userReducer(state = userInit, action) {
  switch (action.type) {
    case 'SET_USER':
      // Lorsque l'action correspond à setUser
      // Retourne un nouvel objet d'état en fusionnant les propriétés de l'état actuel avec celles de action.payload
      
      return { ...state, ...action.payload };

    default:
      // Si aucune action correspondante n'est trouvée, retourne l'état actuel sans modification
      return state;
  }
}
