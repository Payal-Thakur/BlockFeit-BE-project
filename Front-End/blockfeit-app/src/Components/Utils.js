export const isLoggedin = () => {
    return localStorage.getItem("blockFeit") === null;
};
