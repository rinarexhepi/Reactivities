
using Domain;
using MediatR;
using Persistence;

namespace Application.FeedbackKomentet
{
    public class KomenteById
    {
        public class Query : IRequest<Komente>
        {
            public int ID { get; set; }
        }
        public class Handler : IRequestHandler<Query, Komente>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Komente> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Komente.FindAsync(request.ID);
            }

        }
    }
}
