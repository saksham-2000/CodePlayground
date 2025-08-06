export const TABS = [
    { id: 'html', label: 'HTML' },
    { id: 'css', label: 'CSS' },
    { id: 'javascript', label: 'JS' },
    ];
    
    
    export default function EditorTabs({ active, onChange }) {
    return (
    <div className="flex gap-2 p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 border-gray-200">
    {TABS.map((t) => (
    <button
    key={t.id}
    onClick={() => onChange(t.id)}
    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
    active === t.id
    ? ' bg-brand text-white hover:bg-brand-dark'
    : 'hover:bg-neutral-200 dark:hover:bg-neutral-500 dark:text-white'
    }`}
    >
    {t.label}
    </button>
    ))}
    </div>
    );
    }