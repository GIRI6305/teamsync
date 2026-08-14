import { useState } from 'react';
import { initialEmployees } from './data/employees';
import AddEmployeeModal from './components/AddEmployeeModal';
import { Toaster, toast } from 'react-hot-toast';
import { Search, Plus, Trash2, Users, ShieldAlert, ShieldCheck } from 'lucide-react';

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Role-Based Access Control (RBAC) Simulation
  const [isAdmin, setIsAdmin] = useState(true);

  // Filter Logic
  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add Logic
  const handleAddEmployee = (newEmployee) => {
    setEmployees([newEmployee, ...employees]);
    setIsModalOpen(false);
    toast.success(`${newEmployee.name} added successfully!`);
  };

  // Delete Logic
  const handleDelete = (id, name) => {
    setEmployees(employees.filter(emp => emp.id !== id));
    toast.error(`${name} has been removed.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Toaster position="top-right" />
      <AddEmployeeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddEmployee} />

      {/* Top Navigation */}
      <nav className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg"><Users size={24} className="text-white" /></div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">TeamSync</h1>
        </div>
        
        {/* RBAC Toggle Button for Recruiter Demo */}
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all ${isAdmin ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}
        >
          {isAdmin ? <ShieldCheck size={18} /> : <ShieldAlert size={18} />}
          View as: {isAdmin ? 'Admin' : 'Standard User'}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Directory</h2>
            <p className="text-slate-500 mt-1">Manage your team members and their account permissions here.</p>
          </div>
          
          <div className="flex w-full md:w-auto gap-4">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search name, role, or dept..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>
            
            {/* Role-Based UI: Only Admins can see the Add button */}
            {isAdmin && (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-sm whitespace-nowrap"
              >
                <Plus size={20} /> Add User
              </button>
            )}
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-sm uppercase tracking-wider text-slate-500 font-bold">
                  <th className="p-4">Employee</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Status</th>
                  {isAdmin && <th className="p-4 text-right">Actions</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredEmployees.length === 0 ? (
                  <tr><td colSpan="4" className="p-8 text-center text-slate-500 font-medium">No employees found matching your search.</td></tr>
                ) : (
                  filteredEmployees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800">{emp.name}</span>
                          <span className="text-sm text-slate-500">{emp.email}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-700">{emp.role}</span>
                          <span className="text-sm text-slate-500">{emp.department}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          emp.status === 'Active' ? 'bg-green-100 text-green-700' :
                          emp.status === 'On Leave' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {emp.status}
                        </span>
                      </td>
                      {/* Role-Based UI: Only Admins can see the Delete button */}
                      {isAdmin && (
                        <td className="p-4 text-right">
                          <button 
                            onClick={() => handleDelete(emp.id, emp.name)}
                            className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50"
                            title="Delete User"
                          >
                            <Trash2 size={20} />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;