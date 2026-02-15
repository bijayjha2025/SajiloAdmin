
import { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "./ToastContext";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToast } = useToast();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (email === "admin@sajilo.com" && password === "admin123") {
            const userData = {
                id: 1,
                name: "Admin User",
                email: "admin@sajilo.com",
                role: "admin",
                avatar: "https://ui-avatars.com/api/?name=Admin+User&background=f59e0b&color=fff"
            };

            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            addToast("Welcome back, Admin!", "success");
            setLoading(false);
            return true;
        } else {
            addToast("Invalid email or password", "error");
            setLoading(false);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        addToast("Logged out successfully", "info");
    };

    const value = {
        user,
        loading,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

