using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; } 
        public DbSet<Book> Books { get; set; }
        public DbSet<Shteti> Shteti { get; set; }
        public DbSet<Libri> Libri { get; set; }
        public DbSet<LibraPerFemije> LibraPerFemije { get; set; }
    }
}
