using Domain;
using MediatR;
using Persistence;

namespace Application.Autoret
{
    public class AutoriById
    {
        public class Query : IRequest<Autori>
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, Autori>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Autori> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Autori.FindAsync(request.ID);
            }
        }
    }
}
