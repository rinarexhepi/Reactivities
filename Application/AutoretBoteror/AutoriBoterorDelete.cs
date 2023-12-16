

using MediatR;
using Persistence;

namespace Application.AutoretBoteror
{
    public class AutoriBoterorDelete
    {
        public class Command : IRequest
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var autoriBoteror = await _context.AutoriBoteror.FindAsync(request.ID);

                _context.Remove(autoriBoteror);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}