using Domain;
using MediatR;
using Persistence;

namespace Application.Team
{
    public class EkipaById
    {
        public class Query : IRequest<Ekipa>
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, Ekipa>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Ekipa> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Ekipa.FindAsync(request.ID);
            }
        }
    }
}
