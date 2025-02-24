import { createContext, useContext, useReducer } from "react";

interface State {
  task: string;
  checked: boolean;
  completed: boolean;
  user: string | null;
  // time:
  isAuthenticated: boolean;
}

interface StateContextProps {
  state: State;
  dispatch: React.Dispatch<any>;
}

const initialState: State = {
  task: "",
  user: null,
  checked: false,
  completed: false,
  isAuthenticated: false,
};

export const StateContext = createContext<StateContextProps>({
  state: initialState,
  dispatch: () => null,
});

// export const StateProvider = (children: any) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// export const StateContext = createContext();

// export const StateProvider = ({ initialState, reducer, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// export const useStateProvider = () => useContext(StateContext);
