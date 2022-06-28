
using Domain;
using MediatR;
using Persistence;

namespace Application.ContactUs
{
    public class KontaktiById
    {
        public class Query : IRequest<Kontakti>
        {
            public int ID { get; set; }
        }
        public class Handler : IRequestHandler<Query, Kontakti>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Kontakti> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Kontakti.FindAsync(request.ID);
            }

        }
    }
}
