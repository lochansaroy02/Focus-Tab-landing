import { Github, Lock, Moon, Sun, } from "lucide-react";
import { useTheme } from 'next-themes';
import { Button } from './ui/button';


const Header = () => {

    const { theme, setTheme } = useTheme();
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <Lock className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            FocusTab
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-full"
                        >
                            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                        <Button
                            variant="outline"
                            className="hidden sm:flex items-center space-x-2"
                            onClick={() => window.open('https://github.com/lochansaroy02/FocusTab', '_blank')}
                        >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header