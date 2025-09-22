using BlBackend.Models.Feature;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace BlBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<FeatureEntity> Features { get; set; }
    }
}
