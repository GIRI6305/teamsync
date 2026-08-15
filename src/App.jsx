import { useEffect, useMemo, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  Bell,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  ClipboardList,
  Clock3,
  Edit3,
  Eye,
  FileText,
  Filter,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Moon,
  MoreHorizontal,
  Pencil,
  Phone,
  Plus,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Sun,
  Trash2,
  User,
  UserPlus,
  Users,
  X,
  CheckCircle2,
  AlertCircle,
  Lock,
  KeyRound,
  EyeOff,
  MapPin,
  CalendarDays,
  UserRoundCog,
  Layers3,
  ChevronUp,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Demo data                                                                   */
/* -------------------------------------------------------------------------- */

const defaultEmployees = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Senior Frontend Engineer",
    department: "Engineering",
    status: "Active",
    email: "alice.j@teamsync.com",
    phone: "+91 98765 10001",
    location: "Bengaluru",
    manager: "Marcus Smith",
    joiningDate: "2023-04-12",
    skills: ["React", "JavaScript", "UI"],
  },
  {
    id: 2,
    name: "Marcus Smith",
    role: "Backend Developer",
    department: "Engineering",
    status: "Active",
    email: "marcus.s@teamsync.com",
    phone: "+91 98765 10002",
    location: "Hyderabad",
    manager: "Alex Morgan",
    joiningDate: "2022-08-18",
    skills: ["Java", "Spring Boot", "SQL"],
  },
  {
    id: 3,
    name: "Sarah Connor",
    role: "Product Manager",
    department: "Product",
    status: "On Leave",
    email: "sarah.c@teamsync.com",
    phone: "+91 98765 10003",
    location: "Bengaluru",
    manager: "Alex Morgan",
    joiningDate: "2021-11-04",
    skills: ["Product", "Agile", "Leadership"],
  },
  {
    id: 4,
    name: "David Chen",
    role: "UX Designer",
    department: "Design",
    status: "Active",
    email: "david.c@teamsync.com",
    phone: "+91 98765 10004",
    location: "Pune",
    manager: "Sarah Connor",
    joiningDate: "2024-01-22",
    skills: ["Figma", "UX", "Research"],
  },
  {
    id: 5,
    name: "Emily Wright",
    role: "HR Specialist",
    department: "Human Resources",
    status: "Active",
    email: "emily.w@teamsync.com",
    phone: "+91 98765 10005",
    location: "Bengaluru",
    manager: "Alex Morgan",
    joiningDate: "2023-06-10",
    skills: ["Recruitment", "HR", "People"],
  },
  {
    id: 6,
    name: "James Miller",
    role: "QA Engineer",
    department: "Engineering",
    status: "Probation",
    email: "james.m@teamsync.com",
    phone: "+91 98765 10006",
    location: "Chennai",
    manager: "Marcus Smith",
    joiningDate: "2026-02-15",
    skills: ["Testing", "Automation", "Cypress"],
  },
  {
    id: 7,
    name: "Priya Sharma",
    role: "Marketing Specialist",
    department: "Marketing",
    status: "Active",
    email: "priya.s@teamsync.com",
    phone: "+91 98765 10007",
    location: "Mumbai",
    manager: "Alex Morgan",
    joiningDate: "2024-07-08",
    skills: ["Marketing", "SEO", "Content"],
  },
  {
    id: 8,
    name: "Daniel Wilson",
    role: "Sales Executive",
    department: "Sales",
    status: "Active",
    email: "daniel.w@teamsync.com",
    phone: "+91 98765 10008",
    location: "Delhi",
    manager: "Michael Brown",
    joiningDate: "2023-09-14",
    skills: ["Sales", "CRM", "Negotiation"],
  },
];

const defaultTeams = [
  {
    id: 1,
    name: "Frontend Engineering",
    department: "Engineering",
    manager: "Alice Johnson",
    members: 8,
    status: "Active",
  },
  {
    id: 2,
    name: "Product Design",
    department: "Design",
    manager: "David Chen",
    members: 5,
    status: "Active",
  },
  {
    id: 3,
    name: "Growth Marketing",
    department: "Marketing",
    manager: "Priya Sharma",
    members: 6,
    status: "Active",
  },
  {
    id: 4,
    name: "Sales Operations",
    department: "Sales",
    manager: "Daniel Wilson",
    members: 7,
    status: "Active",
  },
];

const defaultDepartments = [
  {
    id: 1,
    name: "Engineering",
    manager: "Marcus Smith",
    employees: 3,
    status: "Active",
  },
  {
    id: 2,
    name: "Product",
    manager: "Sarah Connor",
    employees: 1,
    status: "Active",
  },
  {
    id: 3,
    name: "Design",
    manager: "David Chen",
    employees: 1,
    status: "Active",
  },
  {
    id: 4,
    name: "Human Resources",
    manager: "Emily Wright",
    employees: 1,
    status: "Active",
  },
  {
    id: 5,
    name: "Marketing",
    manager: "Priya Sharma",
    employees: 1,
    status: "Active",
  },
  {
    id: 6,
    name: "Sales",
    manager: "Daniel Wilson",
    employees: 1,
    status: "Active",
  },
];

const demoUsers = [
  {
    id: 1,
    name: "G Dasthagiri",
    email: "admin@teamsync.com",
    password: "password123",
    role: "Admin",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Marcus Smith",
    email: "manager@teamsync.com",
    password: "password123",
    role: "Manager",
    department: "Engineering",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "employee@teamsync.com",
    password: "password123",
    role: "Employee",
    department: "Engineering",
  },
];

const defaultNotifications = [
  {
    id: 1,
    title: "New employee added",
    message: "Priya Sharma joined the Marketing department.",
    time: "12 minutes ago",
    read: false,
    type: "success",
  },
  {
    id: 2,
    title: "Profile updated",
    message: "David Chen updated his profile information.",
    time: "1 hour ago",
    read: false,
    type: "info",
  },
  {
    id: 3,
    title: "Team created",
    message: "Sales Operations team was created.",
    time: "3 hours ago",
    read: true,
    type: "success",
  },
];

const defaultActivities = [
  {
    id: 1,
    user: "G Dasthagiri",
    action: "added",
    target: "Priya Sharma",
    time: "12 minutes ago",
  },
  {
    id: 2,
    user: "David Chen",
    action: "updated",
    target: "his profile",
    time: "1 hour ago",
  },
  {
    id: 3,
    user: "G Dasthagiri",
    action: "created",
    target: "Sales Operations team",
    time: "3 hours ago",
  },
  {
    id: 4,
    user: "Marcus Smith",
    action: "updated",
    target: "James Miller",
    time: "Yesterday",
  },
];

/* -------------------------------------------------------------------------- */
/* Small helpers                                                               */
/* -------------------------------------------------------------------------- */

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in private browsing or restricted environments.
  }
}

function initials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function formatDate(date) {
  if (!date) return "—";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function statusClasses(status) {
  const styles = {
    Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "On Leave": "bg-amber-50 text-amber-700 border-amber-200",
    Probation: "bg-blue-50 text-blue-700 border-blue-200",
    Inactive: "bg-slate-100 text-slate-600 border-slate-200",
    Terminated: "bg-red-50 text-red-700 border-red-200",
  };

  return styles[status] || styles.Inactive;
}

/* -------------------------------------------------------------------------- */
/* App                                                                         */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [employees, setEmployees] = useState(() =>
    readStorage("teamsync_employees", defaultEmployees),
  );

  const [teams, setTeams] = useState(() =>
    readStorage("teamsync_teams", defaultTeams),
  );

  const [departments, setDepartments] = useState(() =>
    readStorage("teamsync_departments", defaultDepartments),
  );

  const [notifications, setNotifications] = useState(() =>
    readStorage("teamsync_notifications", defaultNotifications),
  );

  const [activities, setActivities] = useState(() =>
    readStorage("teamsync_activities", defaultActivities),
  );

  const [currentUser, setCurrentUser] = useState(() =>
    readStorage("teamsync_user", null),
  );

  const [darkMode, setDarkMode] = useState(() =>
    readStorage("teamsync_dark_mode", false),
  );

  const [page, setPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showDepartmentModal, setShowDepartmentModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [profileEdit, setProfileEdit] = useState(false);

  useEffect(() => {
    writeStorage("teamsync_employees", employees);
  }, [employees]);

  useEffect(() => {
    writeStorage("teamsync_teams", teams);
  }, [teams]);

  useEffect(() => {
    writeStorage("teamsync_departments", departments);
  }, [departments]);

  useEffect(() => {
    writeStorage("teamsync_notifications", notifications);
  }, [notifications]);

  useEffect(() => {
    writeStorage("teamsync_activities", activities);
  }, [activities]);

  useEffect(() => {
    writeStorage("teamsync_user", currentUser);
  }, [currentUser]);

  useEffect(() => {
    writeStorage("teamsync_dark_mode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const addActivity = (action, target) => {
    const newActivity = {
      id: Date.now(),
      user: currentUser?.name || "System",
      action,
      target,
      time: "Just now",
    };

    setActivities((previous) => [newActivity, ...previous].slice(0, 20));
  };

  const addNotification = (title, message, type = "success") => {
    const notification = {
      id: Date.now(),
      title,
      message,
      time: "Just now",
      read: false,
      type,
    };

    setNotifications((previous) => [notification, ...previous].slice(0, 20));
  };

  const login = (email, password, remember) => {
    const user = demoUsers.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password,
    );

    if (!user) {
      toast.error("Invalid email or password.");
      return false;
    }

    const authenticatedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
    };

    setCurrentUser(authenticatedUser);

    if (remember) {
      writeStorage("teamsync_user", authenticatedUser);
    }

    setPage("dashboard");
    toast.success(`Welcome back, ${user.name.split(" ")[0]}!`);

    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("teamsync_user");
    setPage("dashboard");
    toast.success("You have been logged out.");
  };

  const canEdit = currentUser?.role === "Admin" || currentUser?.role === "Manager";
  const canDelete = currentUser?.role === "Admin";

  const visibleEmployees = useMemo(() => {
    if (currentUser?.role === "Employee") {
      return employees.filter(
        (employee) => employee.email === currentUser.email,
      );
    }

    return employees;
  }, [employees, currentUser]);

  const filteredEmployees = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return visibleEmployees;

    return visibleEmployees.filter((employee) =>
      [
        employee.name,
        employee.role,
        employee.department,
        employee.email,
        employee.location,
        employee.status,
      ].some((field) => field?.toLowerCase().includes(value)),
    );
  }, [visibleEmployees, search]);

  const dashboardStats = useMemo(() => {
    return {
      total: employees.length,
      active: employees.filter((employee) => employee.status === "Active").length,
      departments: departments.length,
      managers: employees.filter((employee) =>
        employee.role.toLowerCase().includes("manager"),
      ).length,
      leave: employees.filter((employee) => employee.status === "On Leave").length,
    };
  }, [employees, departments]);

  const navigate = (nextPage) => {
    setPage(nextPage);
    setSearch("");
    setSidebarOpen(false);
    setShowNotifications(false);
  };

  const saveEmployee = (form) => {
    if (editingEmployee) {
      setEmployees((previous) =>
        previous.map((employee) =>
          employee.id === editingEmployee.id
            ? { ...editingEmployee, ...form }
            : employee,
        ),
      );

      addActivity("updated", form.name);
      addNotification(
        "Employee updated",
        `${form.name}'s employee record was updated.`,
        "info",
      );

      toast.success("Employee updated successfully.");
    } else {
      const newEmployee = {
        ...form,
        id: Date.now(),
        skills: form.skills || [],
      };

      setEmployees((previous) => [newEmployee, ...previous]);
      addActivity("added", form.name);
      addNotification(
        "New employee added",
        `${form.name} joined ${form.department}.`,
      );

      toast.success("Employee added successfully.");
    }

    setShowEmployeeModal(false);
    setEditingEmployee(null);
  };

  const deleteEmployee = () => {
    if (!showDeleteModal) return;

    const employee = showDeleteModal;

    setEmployees((previous) =>
      previous.filter((item) => item.id !== employee.id),
    );

    addActivity("removed", employee.name);
    addNotification(
      "Employee removed",
      `${employee.name} was removed from TeamSync.`,
      "info",
    );

    setShowDeleteModal(null);
    setSelectedEmployee(null);

    toast.success("Employee removed.");
  };

  const saveTeam = (team) => {
    if (selectedTeam) {
      setTeams((previous) =>
        previous.map((item) =>
          item.id === selectedTeam.id ? { ...selectedTeam, ...team } : item,
        ),
      );

      addActivity("updated", `${team.name} team`);
      toast.success("Team updated.");
    } else {
      const newTeam = {
        ...team,
        id: Date.now(),
        members: Number(team.members) || 0,
      };

      setTeams((previous) => [newTeam, ...previous]);
      addActivity("created", `${team.name} team`);
      addNotification(
        "Team created",
        `${team.name} team was created successfully.`,
      );

      toast.success("Team created.");
    }

    setShowTeamModal(false);
    setSelectedTeam(null);
  };

  const saveDepartment = (department) => {
    if (department.id) {
      setDepartments((previous) =>
        previous.map((item) =>
          item.id === department.id ? department : item,
        ),
      );

      toast.success("Department updated.");
    } else {
      const newDepartment = {
        ...department,
        id: Date.now(),
        employees: 0,
        status: "Active",
      };

      setDepartments((previous) => [newDepartment, ...previous]);
      addActivity("created", `${department.name} department`);
      toast.success("Department created.");
    }

    setShowDepartmentModal(false);
  };

  if (!currentUser) {
    return (
      <>
        <Toaster position="top-right" />
        <AuthScreen
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onLogin={login}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      <Toaster position="top-right" />

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6 dark:border-slate-800">
          <button
            type="button"
            onClick={() => navigate("dashboard")}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Users size={22} />
            </div>

            <div className="text-left">
              <div className="text-xl font-black tracking-tight">
                TeamSync<span className="text-blue-500">.</span>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Workforce OS
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden dark:hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="px-3 pb-3 text-[11px] font-black uppercase tracking-widest text-slate-400">
            Workspace
          </p>

          <nav className="space-y-1">
            <SidebarItem
              icon={<LayoutDashboard size={19} />}
              label="Dashboard"
              active={page === "dashboard"}
              onClick={() => navigate("dashboard")}
            />

            <SidebarItem
              icon={<Users size={19} />}
              label="Employees"
              active={page === "employees"}
              onClick={() => navigate("employees")}
            />

            <SidebarItem
              icon={<Layers3 size={19} />}
              label="Teams"
              active={page === "teams"}
              onClick={() => navigate("teams")}
            />

            <SidebarItem
              icon={<Building2 size={19} />}
              label="Departments"
              active={page === "departments"}
              onClick={() => navigate("departments")}
            />

            <SidebarItem
              icon={<Activity size={19} />}
              label="Activity"
              active={page === "activity"}
              onClick={() => navigate("activity")}
            />

            <SidebarItem
              icon={<Bell size={19} />}
              label="Notifications"
              badge={notifications.filter((item) => !item.read).length}
              active={page === "notifications"}
              onClick={() => navigate("notifications")}
            />
          </nav>

          <p className="px-3 pb-3 pt-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
            Account
          </p>

          <nav className="space-y-1">
            <SidebarItem
              icon={<CircleUserRound size={19} />}
              label="My Profile"
              active={page === "profile"}
              onClick={() => navigate("profile")}
            />

            <SidebarItem
              icon={<Settings size={19} />}
              label="Settings"
              active={page === "settings"}
              onClick={() => navigate("settings")}
            />
          </nav>
        </div>

        <div className="border-t border-slate-200 p-4 dark:border-slate-800">
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70">
            <Avatar name={currentUser.name} />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{currentUser.name}</p>
              <p className="truncate text-xs text-slate-500">
                {currentUser.role}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-500 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"
          >
            <LogOut size={18} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main application */}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
          <div className="flex h-20 items-center gap-4 px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 lg:hidden dark:hover:bg-slate-800"
            >
              <Menu size={22} />
            </button>

            <div className="relative hidden max-w-xl flex-1 md:block">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  if (page !== "employees") setPage("employees");
                }}
                placeholder="Search employees, roles, departments..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:focus:bg-slate-900"
              />
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => setDarkMode((value) => !value)}
                className="rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                title="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowNotifications((value) => !value)}
                  className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Bell size={20} />

                  {notifications.some((item) => !item.read) && (
                    <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500 dark:border-slate-900" />
                  )}
                </button>

                {showNotifications && (
                  <NotificationDropdown
                    notifications={notifications}
                    onOpen={() => navigate("notifications")}
                    onRead={(id) =>
                      setNotifications((previous) =>
                        previous.map((item) =>
                          item.id === id ? { ...item, read: true } : item,
                        ),
                      )
                    }
                  />
                )}
              </div>

              <button
                type="button"
                onClick={() => navigate("profile")}
                className="hidden items-center gap-3 rounded-xl p-1.5 pl-2 transition hover:bg-slate-100 sm:flex dark:hover:bg-slate-800"
              >
                <Avatar name={currentUser.name} size="small" />

                <div className="text-left">
                  <p className="text-sm font-bold">{currentUser.name}</p>
                  <p className="text-xs text-slate-500">{currentUser.role}</p>
                </div>

                <ChevronDown size={16} className="text-slate-400" />
              </button>
            </div>
          </div>

          <div className="px-4 pb-4 md:hidden">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setPage("employees");
                }}
                placeholder="Search TeamSync..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
              />
            </div>
          </div>
        </header>

        <main className="min-h-[calc(100vh-5rem)] px-4 py-6 sm:px-6 lg:px-8">
          {page === "dashboard" && (
            <DashboardPage
              user={currentUser}
              stats={dashboardStats}
              employees={employees}
              teams={teams}
              activities={activities}
              onNavigate={navigate}
            />
          )}

          {page === "employees" && (
            <EmployeesPage
              employees={filteredEmployees}
              search={search}
              setSearch={setSearch}
              canEdit={canEdit}
              canDelete={canDelete}
              onAdd={() => {
                setEditingEmployee(null);
                setShowEmployeeModal(true);
              }}
              onEdit={(employee) => {
                setEditingEmployee(employee);
                setShowEmployeeModal(true);
              }}
              onView={setSelectedEmployee}
              onDelete={setShowDeleteModal}
            />
          )}

          {page === "teams" && (
            <TeamsPage
              teams={teams}
              canEdit={canEdit}
              canDelete={canDelete}
              onAdd={() => {
                setSelectedTeam(null);
                setShowTeamModal(true);
              }}
              onEdit={(team) => {
                setSelectedTeam(team);
                setShowTeamModal(true);
              }}
              onDelete={(team) => {
                if (!canDelete) return;

                setTeams((previous) =>
                  previous.filter((item) => item.id !== team.id),
                );

                addActivity("removed", `${team.name} team`);
                toast.success("Team removed.");
              }}
            />
          )}

          {page === "departments" && (
            <DepartmentsPage
              departments={departments}
              employees={employees}
              canEdit={canEdit}
              canDelete={canDelete}
              onAdd={() => setShowDepartmentModal(true)}
              onEdit={(department) => {
                setShowDepartmentModal(department);
              }}
              onDelete={(department) => {
                if (!canDelete) return;

                setDepartments((previous) =>
                  previous.filter((item) => item.id !== department.id),
                );

                toast.success("Department removed.");
              }}
            />
          )}

          {page === "activity" && (
            <ActivityPage activities={activities} />
          )}

          {page === "notifications" && (
            <NotificationsPage
              notifications={notifications}
              onRead={(id) =>
                setNotifications((previous) =>
                  previous.map((item) =>
                    item.id === id ? { ...item, read: true } : item,
                  ),
                )
              }
              onReadAll={() =>
                setNotifications((previous) =>
                  previous.map((item) => ({ ...item, read: true })),
                )
              }
            />
          )}

          {page === "profile" && (
            <ProfilePage
              user={currentUser}
              employees={employees}
              editMode={profileEdit}
              setEditMode={setProfileEdit}
              onSave={(updatedUser) => {
                setCurrentUser((previous) => ({
                  ...previous,
                  ...updatedUser,
                }));

                setProfileEdit(false);
                addActivity("updated", "profile");
                toast.success("Profile updated.");
              }}
            />
          )}

          {page === "settings" && (
            <SettingsPage
              user={currentUser}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              onLogout={logout}
            />
          )}
        </main>
      </div>

      {/* Employee modal */}
      {showEmployeeModal && (
        <EmployeeModal
          employee={editingEmployee}
          departments={departments}
          onClose={() => {
            setShowEmployeeModal(false);
            setEditingEmployee(null);
          }}
          onSave={saveEmployee}
        />
      )}

      {/* Employee details */}
      {selectedEmployee && (
        <EmployeeDetailsModal
          employee={selectedEmployee}
          canEdit={canEdit}
          canDelete={canDelete}
          onClose={() => setSelectedEmployee(null)}
          onEdit={() => {
            setEditingEmployee(selectedEmployee);
            setSelectedEmployee(null);
            setShowEmployeeModal(true);
          }}
          onDelete={() => setShowDeleteModal(selectedEmployee)}
        />
      )}

      {/* Delete confirmation */}
      {showDeleteModal && (
        <ConfirmModal
          title="Delete employee?"
          message={`Are you sure you want to remove ${showDeleteModal.name} from TeamSync? This action cannot be undone.`}
          confirmLabel="Delete Employee"
          danger
          onClose={() => setShowDeleteModal(null)}
          onConfirm={deleteEmployee}
        />
      )}

      {/* Team modal */}
      {showTeamModal && (
        <TeamModal
          team={selectedTeam}
          onClose={() => {
            setShowTeamModal(false);
            setSelectedTeam(null);
          }}
          onSave={saveTeam}
        />
      )}

      {/* Department modal */}
      {showDepartmentModal && (
        <DepartmentModal
          department={
            typeof showDepartmentModal === "object"
              ? showDepartmentModal
              : null
          }
          onClose={() => setShowDepartmentModal(false)}
          onSave={saveDepartment}
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Authentication                                                              */
/* -------------------------------------------------------------------------- */

function AuthScreen({ darkMode, setDarkMode, onLogin }) {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (!form.email || !form.password) return;

    onLogin(form.email, form.password, remember);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error("Please complete all fields.");
      return;
    }

    toast.success("Account created. Use the demo login to continue.");
    setMode("login");
    setForm((previous) => ({
      ...previous,
      password: "",
    }));
  };

  const handleForgot = (event) => {
    event.preventDefault();

    if (!form.email) {
      toast.error("Enter your email address first.");
      return;
    }

    toast.success("Password reset instructions have been sent.");
    setMode("login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute right-5 top-5">
        <button
          type="button"
          onClick={() => setDarkMode((value) => !value)}
          className="rounded-xl border border-white/10 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </div>

      <div className="grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-950 p-12 xl:p-20">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
                <Users size={24} />
              </div>

              <span className="text-2xl font-black">
                TeamSync<span className="text-blue-200">.</span>
              </span>
            </div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
              <ShieldCheck size={17} />
              Enterprise Workforce Platform
            </div>

            <h1 className="text-5xl font-black leading-tight xl:text-6xl">
              Keep your people,
              <span className="block text-blue-200">
                teams and work
              </span>
              perfectly aligned.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              TeamSync gives modern teams one place to manage employees,
              departments, teams, activity and workforce information.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <AuthStat value="99%" label="Visibility" />
              <AuthStat value="24/7" label="Access" />
              <AuthStat value="1" label="Workspace" />
            </div>
          </div>

          <p className="relative z-10 text-sm text-blue-200/70">
            © 2026 TeamSync. Frontend demonstration project.
          </p>

          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -bottom-24 left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        </div>

        <div className="flex items-center justify-center bg-slate-50 px-5 py-12 text-slate-900 dark:bg-slate-950 dark:text-white lg:px-12">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:hidden">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Users size={23} />
                </div>

                <span className="text-2xl font-black">
                  TeamSync<span className="text-blue-500">.</span>
                </span>
              </div>
            </div>

            {mode === "login" && (
              <>
                <div className="mb-8">
                  <p className="mb-2 text-sm font-bold text-blue-600">
                    WELCOME BACK
                  </p>

                  <h2 className="text-3xl font-black">
                    Sign in to TeamSync
                  </h2>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Access your workforce dashboard.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <AuthInput
                    label="Email address"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(value) => update("email", value)}
                    error={
                      submitted && !form.email
                        ? "Email is required."
                        : ""
                    }
                    icon={<Mail size={18} />}
                  />

                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Password
                    </label>

                    <div className="relative">
                      <Lock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(event) =>
                          update("password", event.target.value)
                        }
                        placeholder="Enter your password"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>

                    {submitted && !form.password && (
                      <p className="mt-1 text-xs font-medium text-red-500">
                        Password is required.
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(event) => setRemember(event.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      Remember me
                    </label>

                    <button
                      type="button"
                      onClick={() => setMode("forgot")}
                      className="text-sm font-bold text-blue-600 hover:text-blue-700"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.99]"
                  >
                    Sign in
                  </button>
                </form>

                <div className="my-7 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Demo access
                  </span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                </div>

                <div className="space-y-2">
                  <DemoLogin
                    label="Admin"
                    email="admin@teamsync.com"
                    onUse={() => {
                      update("email", "admin@teamsync.com");
                      update("password", "password123");
                    }}
                  />

                  <DemoLogin
                    label="Manager"
                    email="manager@teamsync.com"
                    onUse={() => {
                      update("email", "manager@teamsync.com");
                      update("password", "password123");
                    }}
                  />

                  <DemoLogin
                    label="Employee"
                    email="employee@teamsync.com"
                    onUse={() => {
                      update("email", "employee@teamsync.com");
                      update("password", "password123");
                    }}
                  />
                </div>

                <p className="mt-7 text-center text-sm text-slate-500 dark:text-slate-400">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("register")}
                    className="font-bold text-blue-600"
                  >
                    Create one
                  </button>
                </p>
              </>
            )}

            {mode === "register" && (
              <AuthSecondaryPage
                title="Create your account"
                subtitle="Set up a TeamSync workspace account."
                submitLabel="Create account"
                onSubmit={handleRegister}
                fields={[
                  {
                    name: "name",
                    label: "Full name",
                    type: "text",
                    placeholder: "Your full name",
                    icon: <User size={18} />,
                  },
                  {
                    name: "email",
                    label: "Email address",
                    type: "email",
                    placeholder: "you@company.com",
                    icon: <Mail size={18} />,
                  },
                  {
                    name: "password",
                    label: "Password",
                    type: "password",
                    placeholder: "Create a password",
                    icon: <Lock size={18} />,
                  },
                ]}
                values={form}
                onChange={update}
                footer={
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="font-bold text-blue-600"
                    >
                      Sign in
                    </button>
                  </>
                }
              />
            )}

            {mode === "forgot" && (
              <AuthSecondaryPage
                title="Reset your password"
                subtitle="Enter your email and we'll send reset instructions."
                submitLabel="Send reset instructions"
                onSubmit={handleForgot}
                fields={[
                  {
                    name: "email",
                    label: "Email address",
                    type: "email",
                    placeholder: "you@company.com",
                    icon: <Mail size={18} />,
                  },
                ]}
                values={form}
                onChange={update}
                footer={
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="font-bold text-blue-600"
                  >
                    Back to sign in
                  </button>
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Dashboard                                                                   */
/* -------------------------------------------------------------------------- */

function DashboardPage({
  user,
  stats,
  employees,
  teams,
  activities,
  onNavigate,
}) {
  const recentEmployees = employees.slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl">
      <PageHeading
        eyebrow="OVERVIEW"
        title={`Good afternoon, ${user.name.split(" ")[0]}`}
        description="Here's what's happening across your organization today."
        action={
          user.role !== "Employee" ? (
            <button
              type="button"
              onClick={() => onNavigate("employees")}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <UserPlus size={18} />
              Manage Employees
            </button>
          ) : null
        }
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Employees"
          value={stats.total}
          icon={<Users size={21} />}
          detail="+8% this month"
          positive
        />

        <StatCard
          title="Active Employees"
          value={stats.active}
          icon={<CheckCircle2 size={21} />}
          detail={`${stats.leave} currently on leave`}
        />

        <StatCard
          title="Departments"
          value={stats.departments}
          icon={<Building2 size={21} />}
          detail="Across the organization"
        />

        <StatCard
          title="Managers"
          value={stats.managers}
          icon={<ShieldCheck size={21} />}
          detail="Leadership roles"
        />
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-black">Employee Overview</h3>
              <p className="mt-1 text-sm text-slate-500">
                Current workforce distribution.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate("employees")}
              className="text-sm font-bold text-blue-600"
            >
              View all
            </button>
          </div>

          <div className="space-y-5">
            <ProgressRow
              label="Active"
              value={stats.active}
              total={Math.max(stats.total, 1)}
            />

            <ProgressRow
              label="On Leave"
              value={stats.leave}
              total={Math.max(stats.total, 1)}
            />

            <ProgressRow
              label="Other"
              value={Math.max(stats.total - stats.active - stats.leave, 0)}
              total={Math.max(stats.total, 1)}
            />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6">
            <h3 className="text-lg font-black">Teams</h3>
            <p className="mt-1 text-sm text-slate-500">
              Active organizational teams.
            </p>
          </div>

          <div className="space-y-4">
            {teams.slice(0, 4).map((team) => (
              <div
                key={team.id}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950/50">
                    <Users size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">
                      {team.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {team.members} members
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-600">
                  {team.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 dark:border-slate-800">
            <div>
              <h3 className="text-lg font-black">Recent Employees</h3>
              <p className="mt-1 text-sm text-slate-500">
                Latest employee records.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate("employees")}
              className="text-sm font-bold text-blue-600"
            >
              See all
            </button>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {recentEmployees.map((employee) => (
              <div
                key={employee.id}
                className="flex items-center gap-4 px-6 py-4"
              >
                <Avatar name={employee.name} />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">
                    {employee.name}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {employee.role} · {employee.department}
                  </p>
                </div>

                <span
                  className={`hidden rounded-full border px-2.5 py-1 text-[11px] font-bold sm:inline-flex ${statusClasses(
                    employee.status,
                  )}`}
                >
                  {employee.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <ActivityTimeline activities={activities.slice(0, 6)} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Employees                                                                   */
/* -------------------------------------------------------------------------- */

function EmployeesPage({
  employees,
  search,
  setSearch,
  canEdit,
  canDelete,
  onAdd,
  onEdit,
  onView,
  onDelete,
}) {
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("name");

  const departments = [
    "All",
    ...new Set(employees.map((employee) => employee.department)),
  ];

  const statuses = ["All", "Active", "On Leave", "Probation", "Inactive"];

  const filtered = employees
    .filter(
      (employee) =>
        department === "All" || employee.department === department,
    )
    .filter(
      (employee) => status === "All" || employee.status === status,
    )
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "department")
        return a.department.localeCompare(b.department);
      if (sort === "role") return a.role.localeCompare(b.role);
      return 0;
    });

  return (
    <div className="mx-auto max-w-7xl">
      <PageHeading
        eyebrow="PEOPLE"
        title="Employees"
        description="Manage employee records, roles, departments and workforce status."
        action={
          canEdit ? (
            <button
              type="button"
              onClick={onAdd}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
            >
              <Plus size={18} />
              Add Employee
            </button>
          ) : null
        }
      />

      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto_auto]">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search employees..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900"
          />
        </div>

        <Select value={department} onChange={setDepartment} options={departments} />
        <Select value={status} onChange={setStatus} options={statuses} />
        <Select
          value={sort}
          onChange={setSort}
          options={[
            { label: "Sort: Name", value: "name" },
            { label: "Sort: Department", value: "department" },
            { label: "Sort: Role", value: "role" },
          ]}
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <Filter size={16} />
            {filtered.length} employee{filtered.length === 1 ? "" : "s"} found
          </div>

          <span className="hidden text-xs font-medium text-slate-400 sm:block">
            Select an employee to view details
          </span>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<Users size={30} />}
            title="No employees found"
            message="Try changing your search or filters."
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left dark:border-slate-800 dark:bg-slate-800/50">
                  <TableHeader>Employee</TableHeader>
                  <TableHeader>Role</TableHeader>
                  <TableHeader>Department</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Location</TableHeader>
                  <TableHeader align="right">Actions</TableHeader>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((employee) => (
                  <tr
                    key={employee.id}
                    className="group transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        onClick={() => onView(employee)}
                        className="flex items-center gap-3 text-left"
                      >
                        <Avatar name={employee.name} />

                        <div>
                          <p className="font-bold">{employee.name}</p>
                          <p className="text-xs text-slate-500">
                            {employee.email}
                          </p>
                        </div>
                      </button>
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      {employee.role}
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      {employee.department}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-xs font-bold ${statusClasses(
                          employee.status,
                        )}`}
                      >
                        {employee.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {employee.location || "—"}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-1 opacity-100">
                        <IconButton
                          label="View"
                          onClick={() => onView(employee)}
                        >
                          <Eye size={17} />
                        </IconButton>

                        {canEdit && (
                          <IconButton
                            label="Edit"
                            onClick={() => onEdit(employee)}
                          >
                            <Pencil size={17} />
                          </IconButton>
                        )}

                        {canDelete && (
                          <IconButton
                            label="Delete"
                            danger
                            onClick={() => onDelete(employee)}
                          >
                            <Trash2 size={17} />
                          </IconButton>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Teams                                                                       */
/* -------------------------------------------------------------------------- */

function TeamsPage({
  teams,
  canEdit,
  canDelete,
  onAdd,
  onEdit,
  onDelete,
}) {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeading
        eyebrow="ORGANIZATION"
        title="Teams"
        description="Organize people into focused teams and track team ownership."
        action={
          canEdit ? (
            <button
              type="button"
              onClick={onAdd}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white hover:bg-blue-700"
            >
              <Plus size={18} />
              Create Team
            </button>
          ) : null
        }
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {teams.map((team) => (
          <div
            key={team.id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
                <Layers3 size={23} />
              </div>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                {team.status}
              </span>
            </div>

            <h3 className="text-lg font-black">{team.name}</h3>

            <p className="mt-1 text-sm text-slate-500">
              {team.department}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <InfoBox label="Members" value={team.members} />
              <InfoBox label="Manager" value={team.manager} />
            </div>

            {canEdit && (
              <div className="mt-6 flex gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onEdit(team)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-bold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <Edit3 size={16} />
                  Edit
                </button>

                {canDelete && (
                  <button
                    type="button"
                    onClick={() => onDelete(team)}
                    className="rounded-xl border border-red-100 px-4 text-red-600 hover:bg-red-50 dark:border-red-950 dark:hover:bg-red-950/30"
                  >
                    <Trash2 size={17} />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Departments                                                                 */
/* -------------------------------------------------------------------------- */

function DepartmentsPage({
  departments,
  employees,
  canEdit,
  canDelete,
  onAdd,
  onEdit,
  onDelete,
}) {
  const departmentCount = (name) =>
    employees.filter((employee) => employee.department === name).length;

  return (
    <div className="mx-auto max-w-7xl">
      <PageHeading
        eyebrow="ORGANIZATION"
        title="Departments"
        description="Manage organizational departments and their leadership."
        action={
          canEdit ? (
            <button
              type="button"
              onClick={onAdd}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white hover:bg-blue-700"
            >
              <Plus size={18} />
              Add Department
            </button>
          ) : null
        }
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => (
          <div
            key={department.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40">
                <Building2 size={21} />
              </div>

              <span className="text-xs font-bold text-emerald-600">
                {department.status}
              </span>
            </div>

            <h3 className="mt-5 text-lg font-black">
              {department.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Manager: {department.manager}
            </p>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-800/60">
              <span className="text-sm font-medium text-slate-500">
                Employees
              </span>

              <span className="font-black">
                {departmentCount(department.name)}
              </span>
            </div>

            {canEdit && (
              <div className="mt-5 flex gap-2">
                <button
                  type="button"
                  onClick={() => onEdit(department)}
                  className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-bold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  Edit
                </button>

                {canDelete && (
                  <button
                    type="button"
                    onClick={() => onDelete(department)}
                    className="rounded-xl border border-red-100 px-4 text-red-600 hover:bg-red-50 dark:border-red-950 dark:hover:bg-red-950/30"
                  >
                    <Trash2 size={17} />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Activity                                                                    */
/* -------------------------------------------------------------------------- */

function ActivityPage({ activities }) {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHeading
        eyebrow="AUDIT TRAIL"
        title="Activity"
        description="A timeline of important actions across your workspace."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <ActivityTimeline activities={activities} detailed />
      </div>
    </div>
  );
}

function ActivityTimeline({ activities, detailed = false }) {
  return (
    <section
      className={
        detailed
          ? ""
          : "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      }
    >
      <div className="mb-6">
        <h3 className="text-lg font-black">Recent Activity</h3>
        <p className="mt-1 text-sm text-slate-500">
          Latest actions in your workspace.
        </p>
      </div>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/40">
              <Activity size={16} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white">
                  {activity.user}
                </span>{" "}
                {activity.action}{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  {activity.target}
                </span>
              </p>

              <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                <Clock3 size={12} />
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Notifications                                                               */
/* -------------------------------------------------------------------------- */

function NotificationsPage({ notifications, onRead, onReadAll }) {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeading
        eyebrow="UPDATES"
        title="Notifications"
        description="Stay informed about changes in your TeamSync workspace."
        action={
          <button
            type="button"
            onClick={onReadAll}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            Mark all as read
          </button>
        }
      />

      <div className="space-y-3">
        {notifications.map((notification) => (
          <button
            type="button"
            key={notification.id}
            onClick={() => onRead(notification.id)}
            className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition ${
              notification.read
                ? "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                : "border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20"
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm dark:bg-slate-900">
              {notification.type === "success" ? (
                <CheckCircle2 size={19} />
              ) : (
                <Bell size={19} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-black">{notification.title}</h3>

                {!notification.read && (
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                )}
              </div>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                {notification.message}
              </p>

              <p className="mt-2 text-xs font-bold text-slate-400">
                {notification.time}
              </p>
            </div>
          </button>
        ))}

        {notifications.length === 0 && (
          <EmptyState
            icon={<Bell size={30} />}
            title="You're all caught up"
            message="There are no notifications to show."
          />
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Profile                                                                     */
/* -------------------------------------------------------------------------- */

function ProfilePage({
  user,
  employees,
  editMode,
  setEditMode,
  onSave,
}) {
  const employee =
    employees.find((item) => item.email === user.email) || {
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
      phone: "",
      location: "",
      manager: "",
      joiningDate: "",
      skills: [],
    };

  const [form, setForm] = useState({
    name: employee.name,
    email: employee.email,
    phone: employee.phone || "",
    location: employee.location || "",
    department: employee.department || "",
    role: employee.role || "",
  });

  useEffect(() => {
    setForm({
      name: employee.name,
      email: employee.email,
      phone: employee.phone || "",
      location: employee.location || "",
      department: employee.department || "",
      role: employee.role || "",
    });
  }, [employee.name, employee.email, employee.phone, employee.location, employee.department, employee.role]);

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeading
        eyebrow="ACCOUNT"
        title="My Profile"
        description="Manage your personal and professional information."
        action={
          <button
            type="button"
            onClick={() => {
              if (editMode) {
                onSave({
                  name: form.name,
                  email: form.email,
                  phone: form.phone,
                  location: form.location,
                  department: form.department,
                  role: form.role,
                });
              } else {
                setEditMode(true);
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white hover:bg-blue-700"
          >
            {editMode ? <Check size={18} /> : <Pencil size={18} />}
            {editMode ? "Save Changes" : "Edit Profile"}
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

        <div className="px-6 pb-8 sm:px-8">
          <div className="-mt-10 mb-8 flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-blue-100 text-2xl font-black text-blue-700 shadow-lg dark:border-slate-900 dark:bg-blue-950 dark:text-blue-300">
              {initials(form.name)}
            </div>

            <div>
              <h2 className="text-2xl font-black">{form.name}</h2>
              <p className="text-sm text-slate-500">
                {form.role} · {form.department}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProfileField
              label="Full Name"
              value={form.name}
              editable={editMode}
              onChange={(value) =>
                setForm((previous) => ({
                  ...previous,
                  name: value,
                }))
              }
            />

            <ProfileField
              label="Email"
              value={form.email}
              editable={false}
            />

            <ProfileField
              label="Phone"
              value={form.phone}
              editable={editMode}
              onChange={(value) =>
                setForm((previous) => ({
                  ...previous,
                  phone: value,
                }))
              }
            />

            <ProfileField
              label="Location"
              value={form.location}
              editable={editMode}
              onChange={(value) =>
                setForm((previous) => ({
                  ...previous,
                  location: value,
                }))
              }
            />

            <ProfileField
              label="Department"
              value={form.department}
              editable={false}
            />

            <ProfileField
              label="Position"
              value={form.role}
              editable={false}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ProfileInfo
              icon={<Shield size={18} />}
              label="Access level"
              value={user.role}
            />

            <ProfileInfo
              icon={<Building2 size={18} />}
              label="Department"
              value={employee.department || "—"}
            />

            <ProfileInfo
              icon={<CalendarDays size={18} />}
              label="Joined"
              value={formatDate(employee.joiningDate)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Settings                                                                    */
/* -------------------------------------------------------------------------- */

function SettingsPage({
  user,
  darkMode,
  setDarkMode,
  onLogout,
}) {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeading
        eyebrow="PREFERENCES"
        title="Settings"
        description="Control your TeamSync experience and account preferences."
      />

      <div className="space-y-5">
        <SettingsSection
          title="Appearance"
          description="Choose how TeamSync looks on your device."
          icon={<Sun size={20} />}
        >
          <SettingRow
            title="Dark mode"
            description="Use a darker interface for low-light environments."
            control={
              <Toggle
                checked={darkMode}
                onChange={() => setDarkMode((value) => !value)}
              />
            }
          />
        </SettingsSection>

        <SettingsSection
          title="Notifications"
          description="Choose which updates you want to receive."
          icon={<Bell size={20} />}
        >
          <SettingRow
            title="Workspace notifications"
            description="Receive notifications about employee and team changes."
            control={
              <Toggle
                checked={notifications}
                onChange={() => setNotifications((value) => !value)}
              />
            }
          />

          <SettingRow
            title="Email updates"
            description="Receive important TeamSync updates by email."
            control={
              <Toggle
                checked={emailUpdates}
                onChange={() => setEmailUpdates((value) => !value)}
              />
            }
          />
        </SettingsSection>

        <SettingsSection
          title="Security"
          description="Manage your account security."
          icon={<Shield size={20} />}
        >
          <SettingRow
            title="Change password"
            description={`Password settings for ${user.email}`}
            control={
              <button
                type="button"
                onClick={() =>
                  toast.success("Password reset flow opened.")
                }
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Change
              </button>
            }
          />

          <SettingRow
            title="Sign out"
            description="Sign out from your current TeamSync session."
            control={
              <button
                type="button"
                onClick={onLogout}
                className="rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
              >
                Sign out
              </button>
            }
          />
        </SettingsSection>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-950 dark:bg-blue-950/20">
          <div className="flex gap-3">
            <AlertCircle className="mt-0.5 shrink-0 text-blue-600" size={20} />

            <div>
              <p className="font-bold text-blue-900 dark:text-blue-200">
                Frontend-only demonstration
              </p>

              <p className="mt-1 text-sm leading-6 text-blue-700 dark:text-blue-300">
                TeamSync currently stores demonstration data in your browser.
                Production authentication should be connected to a secure
                backend before handling real employee information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable UI                                                                 */
/* -------------------------------------------------------------------------- */

function PageHeading({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </p>

        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          {title}
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      {action}
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active,
  onClick,
  badge,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition ${
        active
          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
      }`}
    >
      {icon}

      <span className="flex-1 text-left">{label}</span>

      {badge > 0 && (
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
            active
              ? "bg-white/20 text-white"
              : "bg-red-100 text-red-600 dark:bg-red-950/40"
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

function StatCard({
  title,
  value,
  icon,
  detail,
  positive,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
          {icon}
        </div>

        {positive && (
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
            <ArrowUp size={12} />
            8%
          </span>
        )}
      </div>

      <p className="mt-5 text-sm font-bold text-slate-500">{title}</p>
      <p className="mt-1 text-3xl font-black">{value}</p>
      <p className="mt-2 text-xs font-medium text-slate-400">{detail}</p>
    </div>
  );
}

function ProgressRow({ label, value, total }) {
  const percentage = Math.round((value / total) * 100);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-bold">{label}</span>
        <span className="text-sm font-black">{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function Avatar({ name, size = "normal" }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 font-black text-white ${
        size === "small"
          ? "h-9 w-9 text-xs"
          : "h-10 w-10 text-xs"
      }`}
    >
      {initials(name)}
    </div>
  );
}

function TableHeader({ children, align = "left" }) {
  return (
    <th
      className={`px-5 py-4 text-xs font-black uppercase tracking-wider text-slate-400 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {children}
    </th>
  );
}

function IconButton({
  children,
  label,
  onClick,
  danger = false,
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className={`rounded-lg p-2 transition ${
        danger
          ? "text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"
          : "text-slate-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/30"
      }`}
    >
      {children}
    </button>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
      <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 truncate text-sm font-bold">{value}</p>
    </div>
  );
}

function EmptyState({
  icon,
  title,
  message,
}) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800">
        {icon}
      </div>

      <h3 className="text-lg font-black">{title}</h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        {message}
      </p>
    </div>
  );
}

function Select({ value, onChange, options }) {
  const normalized = options.map((option) =>
    typeof option === "string"
      ? { label: option, value: option }
      : option,
  );

  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-blue-500 dark:border-slate-800 dark:bg-slate-900"
    >
      {normalized.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

/* -------------------------------------------------------------------------- */
/* Modals                                                                      */
/* -------------------------------------------------------------------------- */

function EmployeeModal({
  employee,
  departments,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    name: employee?.name || "",
    role: employee?.role || "",
    department: employee?.department || departments[0]?.name || departments[0] || "Engineering",
    status: employee?.status || "Active",
    email: employee?.email || "",
    phone: employee?.phone || "",
    location: employee?.location || "",
    manager: employee?.manager || "",
    joiningDate:
      employee?.joiningDate ||
      new Date().toISOString().split("T")[0],
    skills: employee?.skills || [],
  });

  const [skillInput, setSkillInput] = useState("");

  const update = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const addSkill = () => {
    const value = skillInput.trim();

    if (!value) return;

    setForm((previous) => ({
      ...previous,
      skills: [...previous.skills, value],
    }));

    setSkillInput("");
  };

  const submit = (event) => {
    event.preventDefault();

    if (!form.name || !form.role || !form.email) {
      toast.error("Name, role and email are required.");
      return;
    }

    onSave(form);
  };

  return (
    <ModalShell
      title={employee ? "Edit Employee" : "Add New Employee"}
      subtitle={
        employee
          ? "Update the employee's information."
          : "Create a new employee record."
      }
      onClose={onClose}
    >
      <form onSubmit={submit} className="space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label="Full Name"
            required
            value={form.name}
            onChange={(value) => update("name", value)}
            placeholder="e.g. Rahul Kumar"
          />

          <FormField
            label="Email"
            required
            type="email"
            value={form.email}
            onChange={(value) => update("email", value)}
            placeholder="rahul@company.com"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label="Role"
            required
            value={form.role}
            onChange={(value) => update("role", value)}
            placeholder="e.g. Software Engineer"
          />

          <div>
            <label className="mb-2 block text-sm font-bold">
              Department
            </label>

            <select
              value={form.department}
              onChange={(event) =>
                update("department", event.target.value)
              }
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
            >
              {departments.map((department) => {
                const value =
                  typeof department === "string"
                    ? department
                    : department.name;

                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label="Phone"
            value={form.phone}
            onChange={(value) => update("phone", value)}
            placeholder="+91 98765 43210"
          />

          <FormField
            label="Location"
            value={form.location}
            onChange={(value) => update("location", value)}
            placeholder="Bengaluru"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label="Manager"
            value={form.manager}
            onChange={(value) => update("manager", value)}
            placeholder="Manager name"
          />

          <FormField
            label="Joining Date"
            type="date"
            value={form.joiningDate}
            onChange={(value) => update("joiningDate", value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">
            Status
          </label>

          <select
            value={form.status}
            onChange={(event) => update("status", event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          >
            <option>Active</option>
            <option>On Leave</option>
            <option>Probation</option>
            <option>Inactive</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">
            Skills
          </label>

          <div className="flex gap-2">
            <input
              value={skillInput}
              onChange={(event) => setSkillInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  addSkill();
                }
              }}
              placeholder="Add a skill"
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
            />

            <button
              type="button"
              onClick={addSkill}
              className="rounded-xl bg-slate-900 px-4 font-bold text-white dark:bg-white dark:text-slate-900"
            >
              <Plus size={18} />
            </button>
          </div>

          {form.skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {form.skills.map((skill) => (
                <button
                  type="button"
                  key={skill}
                  onClick={() =>
                    setForm((previous) => ({
                      ...previous,
                      skills: previous.skills.filter(
                        (item) => item !== skill,
                      ),
                    }))
                  }
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
                >
                  {skill} ×
                </button>
              ))}
            </div>
          )}
        </div>

        <ModalActions onClose={onClose} submitLabel={employee ? "Save Changes" : "Add Employee"} />
      </form>
    </ModalShell>
  );
}

function EmployeeDetailsModal({
  employee,
  canEdit,
  canDelete,
  onClose,
  onEdit,
  onDelete,
}) {
  return (
    <ModalShell
      title="Employee Details"
      subtitle="Complete employee profile."
      onClose={onClose}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-black text-white">
          {initials(employee.name)}
        </div>

        <div>
          <h3 className="text-xl font-black">{employee.name}</h3>
          <p className="text-sm text-slate-500">
            {employee.role} · {employee.department}
          </p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <DetailItem icon={<Mail size={17} />} label="Email" value={employee.email} />
        <DetailItem icon={<Phone size={17} />} label="Phone" value={employee.phone || "—"} />
        <DetailItem icon={<MapPin size={17} />} label="Location" value={employee.location || "—"} />
        <DetailItem icon={<User size={17} />} label="Manager" value={employee.manager || "—"} />
        <DetailItem icon={<CalendarDays size={17} />} label="Joining Date" value={formatDate(employee.joiningDate)} />
        <DetailItem icon={<Shield size={17} />} label="Status" value={employee.status} />
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p className="mb-3 text-xs font-black uppercase tracking-wider text-slate-400">
          Skills
        </p>

        <div className="flex flex-wrap gap-2">
          {(employee.skills || []).length === 0 ? (
            <span className="text-sm text-slate-500">
              No skills added.
            </span>
          ) : (
            employee.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300"
              >
                {skill}
              </span>
            ))
          )}
        </div>
      </div>

      {(canEdit || canDelete) && (
        <div className="mt-7 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold dark:border-slate-700"
          >
            Close
          </button>

          {canDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 dark:border-red-950"
            >
              Delete
            </button>
          )}

          {canEdit && (
            <button
              type="button"
              onClick={onEdit}
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
            >
              Edit Employee
            </button>
          )}
        </div>
      )}
    </ModalShell>
  );
}

function TeamModal({ team, onClose, onSave }) {
  const [form, setForm] = useState({
    name: team?.name || "",
    department: team?.department || "Engineering",
    manager: team?.manager || "",
    members: team?.members || 0,
    status: team?.status || "Active",
  });

  const submit = (event) => {
    event.preventDefault();

    if (!form.name || !form.manager) {
      toast.error("Team name and manager are required.");
      return;
    }

    onSave(form);
  };

  return (
    <ModalShell
      title={team ? "Edit Team" : "Create Team"}
      subtitle="Manage team information."
      onClose={onClose}
    >
      <form onSubmit={submit} className="space-y-5">
        <FormField
          label="Team Name"
          required
          value={form.name}
          onChange={(value) =>
            setForm((previous) => ({
              ...previous,
              name: value,
            }))
          }
          placeholder="e.g. Platform Engineering"
        />

        <FormField
          label="Department"
          value={form.department}
          onChange={(value) =>
            setForm((previous) => ({
              ...previous,
              department: value,
            }))
          }
          placeholder="Engineering"
        />

        <FormField
          label="Manager"
          required
          value={form.manager}
          onChange={(value) =>
            setForm((previous) => ({
              ...previous,
              manager: value,
            }))
          }
          placeholder="Manager name"
        />

        <FormField
          label="Number of members"
          type="number"
          value={form.members}
          onChange={(value) =>
            setForm((previous) => ({
              ...previous,
              members: value,
            }))
          }
        />

        <ModalActions onClose={onClose} submitLabel={team ? "Save Changes" : "Create Team"} />
      </form>
    </ModalShell>
  );
}

function DepartmentModal({
  department,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    id: department?.id,
    name: department?.name || "",
    manager: department?.manager || "",
    status: department?.status || "Active",
  });

  const submit = (event) => {
    event.preventDefault();

    if (!form.name || !form.manager) {
      toast.error("Department name and manager are required.");
      return;
    }

    onSave(form);
  };

  return (
    <ModalShell
      title={department ? "Edit Department" : "Add Department"}
      subtitle="Manage department information."
      onClose={onClose}
    >
      <form onSubmit={submit} className="space-y-5">
        <FormField
          label="Department Name"
          required
          value={form.name}
          onChange={(value) =>
            setForm((previous) => ({
              ...previous,
              name: value,
            }))
          }
          placeholder="e.g. Finance"
        />

        <FormField
          label="Department Manager"
          required
          value={form.manager}
          onChange={(value) =>
            setForm((previous) => ({
              ...previous,
              manager: value,
            }))
          }
          placeholder="Manager name"
        />

        <ModalActions
          onClose={onClose}
          submitLabel={department ? "Save Changes" : "Add Department"}
        />
      </form>
    </ModalShell>
  );
}

function ConfirmModal({
  title,
  message,
  confirmLabel,
  danger = false,
  onClose,
  onConfirm,
}) {
  return (
    <ModalShell
      title={title}
      subtitle="Please confirm this action."
      onClose={onClose}
    >
      <div className="flex gap-4 rounded-xl bg-red-50 p-4 dark:bg-red-950/20">
        <AlertCircle className="shrink-0 text-red-600" size={21} />

        <p className="text-sm leading-6 text-red-700 dark:text-red-300">
          {message}
        </p>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold dark:border-slate-700"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onConfirm}
          className={`rounded-xl px-5 py-3 text-sm font-black text-white ${
            danger
              ? "bg-red-600 hover:bg-red-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {confirmLabel}
        </button>
      </div>
    </ModalShell>
  );
}

function ModalShell({
  title,
  subtitle,
  onClose,
  children,
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 className="text-xl font-black">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

function ModalActions({
  onClose,
  submitLabel,
}) {
  return (
    <div className="flex justify-end gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
      <button
        type="button"
        onClick={onClose}
        className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold dark:border-slate-700"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white hover:bg-blue-700"
      >
        {submitLabel}
      </button>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        required={required}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:focus:bg-slate-900"
      />
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
      <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400">
        {icon}
        {label}
      </div>

      <p className="break-words text-sm font-bold">{value}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Header helpers                                                              */
/* -------------------------------------------------------------------------- */

function NotificationDropdown({
  notifications,
  onOpen,
  onRead,
}) {
  const unread = notifications.filter((item) => !item.read).slice(0, 4);

  return (
    <div className="absolute right-0 top-14 z-50 w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
        <h3 className="font-black">Notifications</h3>

        <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-black text-blue-600 dark:bg-blue-950/40">
          {unread.length} new
        </span>
      </div>

      <div>
        {unread.length === 0 ? (
          <p className="px-5 py-8 text-center text-sm text-slate-500">
            You're all caught up.
          </p>
        ) : (
          unread.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => onRead(item.id)}
              className="flex w-full gap-3 border-b border-slate-100 p-4 text-left hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
            >
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

              <div>
                <p className="text-sm font-bold">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.message}
                </p>
              </div>
            </button>
          ))
        )}
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="w-full border-t border-slate-100 px-5 py-3 text-sm font-bold text-blue-600 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
      >
        View all notifications
      </button>
    </div>
  );
}

function AuthStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <p className="text-2xl font-black">{value}</p>
      <p className="mt-1 text-xs font-bold text-blue-200">{label}</p>
    </div>
  );
}

function AuthInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  icon,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">{label}</label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>

        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900"
        />
      </div>

      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}

function AuthSecondaryPage({
  title,
  subtitle,
  submitLabel,
  onSubmit,
  fields,
  values,
  onChange,
  footer,
}) {
  return (
    <>
      <div className="mb-8">
        <p className="mb-2 text-sm font-bold text-blue-600">
          TEAMSYNC ACCOUNT
        </p>

        <h2 className="text-3xl font-black">{title}</h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        {fields.map((field) => (
          <AuthInput
            key={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            value={values[field.name] || ""}
            onChange={(value) => onChange(field.name, value)}
            icon={field.icon}
          />
        ))}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-slate-500 dark:text-slate-400">
        {footer}
      </p>
    </>
  );
}

function DemoLogin({
  label,
  email,
  onUse,
}) {
  return (
    <button
      type="button"
      onClick={onUse}
      className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-blue-950/20"
    >
      <div>
        <p className="text-sm font-bold">{label}</p>
        <p className="text-xs text-slate-500">{email}</p>
      </div>

      <ArrowUp size={16} className="rotate-45 text-blue-600" />
    </button>
  );
}

function ProfileField({
  label,
  value,
  editable,
  onChange,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-400">
        {label}
      </label>

      {editable ? (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
        />
      ) : (
        <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold dark:bg-slate-800/60">
          {value || "—"}
        </div>
      )}
    </div>
  );
}

function ProfileInfo({
  icon,
  label,
  value,
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
      <div className="mb-2 flex items-center gap-2 text-slate-400">
        {icon}
        <span className="text-xs font-black uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p className="font-bold">{value}</p>
    </div>
  );
}

function SettingsSection({
  title,
  description,
  icon,
  children,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start gap-4 border-b border-slate-100 px-6 py-5 dark:border-slate-800">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
          {icon}
        </div>

        <div>
          <h3 className="font-black">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {children}
      </div>
    </section>
  );
}

function SettingRow({
  title,
  description,
  control,
}) {
  return (
    <div className="flex items-center justify-between gap-6 px-6 py-5">
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <div className="shrink-0">{control}</div>
    </div>
  );
}

function Toggle({
  checked,
  onChange,
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-label="Toggle setting"
      className={`relative h-7 w-12 rounded-full transition ${
        checked ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
      }`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
          checked ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

export {
  DashboardPage,
  EmployeesPage,
  TeamsPage,
  DepartmentsPage,
  ActivityPage,
  NotificationsPage,
  ProfilePage,
  SettingsPage,
};