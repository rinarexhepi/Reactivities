using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ContactUs
{
    public class KontaktiList
    {
        public class Query : IRequest<List<Kontakti>> { }

        public class Handler : IRequestHandler<Query, List<Kontakti>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Kontakti>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Kontakti.ToListAsync();
            }
        }
    }
}