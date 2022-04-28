
using MediatR;
using Persistence;

namespace Application.Country
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int ID_Shteti { get; set; }
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
                var book=await _context.Shteti.FindAsync(request.ID_Shteti);

                _context.Remove(book);

                await _context.SaveChangesAsync(); 

                return Unit.Value;
            }
        }
    }
}
