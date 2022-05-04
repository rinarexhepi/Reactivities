using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaTekste
{
    public class TeksteById
    {
        public class Query : IRequest<Tekste>
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, Tekste>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Tekste> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Tekste.FindAsync(request.ID);
            }
        }
    }
}
